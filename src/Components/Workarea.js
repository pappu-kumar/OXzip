import React, { useState } from 'react';
import icoFILE from '../img/file.png';
import axios from './httpRequest';
import copyICO from '../img/copy-icon.svg';

const Workarea = () => {
  const [message, setMessage] = useState(false);
  const [myurl, setMyUrl] = useState('');

  const dragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    event.preventDefault();
    const fileInput = document.querySelector('.drop__zone-fileInput');

    const file = event.dataTransfer.files;
    if (file.length) {
      fileInput.files = file;
    }
    uploadFile();
  };

  const openFiles = () => {
    const fileInput = document.querySelector('.drop__zone-fileInput');
    fileInput.click();
    fileInput.addEventListener('change', () => {
      uploadFile();
    });
  };

  const showLink = ({ file: url }) => {
    const progress__container = document.querySelector('.progress__container');
    const drop__zone = document.querySelector('.drop__zone');
    const sharing__url = document.querySelector('.sharing__url');
    const sharing__container = document.querySelector('.sharing__container');
    progress__container.style.display = 'none';
    drop__zone.style.display = 'none';
    sharing__container.style.display = 'block';
    sharing__url.value = url;
    setMyUrl(url);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const url = myurl;
    const formData = {
      uuid: url.split('/').splice(-1, 1)[0],
      emailTo: e.target[1].value,
      emailFrom: e.target[0].value,
    };
    console.table(formData);

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post('api/files/send', formData, { headers: headers })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    /* const emailURL = 'https://oxzip.herokuapp.com/api/files/send';
    fetch(emailURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); */
  };

  const uploadFile = () => {
    const progress__container = document.querySelector('.progress__container');
    progress__container.style.display = 'block';
    const fileInput = document.querySelector('.drop__zone-fileInput');
    const progress = document.querySelector('.bg-progress');
    const progressCounter = document.querySelector(
      '.progress__percent-indicator'
    );
    const config = {
      onUploadProgress: (Progevent) => {
        var percentCompleted = Math.round(
          (Progevent.loaded * 100) / Progevent.total
        );
        console.log(percentCompleted);
        progress.style.width = `${percentCompleted}%`;
        progressCounter.innerText = percentCompleted;
      },
    };
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('myfile', file);

    axios
      .post('api/files', formData, config)
      .then((response) => {
        showLink(response.data);
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className='upload__container'>
      <div
        className='drop__zone'
        onDragOver={(e) => dragOver(e)}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
        onClick={() => {
          openFiles();
        }}
      >
        <div className='drop__zone-icon'>
          <img src={icoFILE} alt='Upoad file' className='drop__zone-icon--1' />
        </div>
        <div className='drop__zone-title'>Drop your items here...</div>
        <input type='file' className='drop__zone-fileInput' />
      </div>
      <div className='progress__container'>
        <div className='bg-progress'></div>
        <div className='progress__percent'>
          <span className='progress__percent-indicator'>0</span>%
        </div>
      </div>
      <div className='sharing__container'>
        <div className='sharing__component'>
          <p className='sharing__expire'>Link expires in 24hrs</p>
          <input className='sharing__url' type='text' readOnly />
          <img
            src={copyICO}
            className='sharing__url-icon'
            alt='copy icon for you'
            onClick={(e) => {
              const sharing__url = document.querySelector('.sharing__url');
              sharing__url.select();
              document.execCommand('copy');
            }}
            onClickCapture={() => {
              setMessage(true);
              setTimeout(() => setMessage(false), 2000);
            }}
          />
        </div>
        <div className='sharing__options'>OPTIONS</div>
        <div className='sharing__option-email'>
          <form className='form' onSubmit={(e) => onFormSubmit(e)}>
            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                placeholder='From Email'
                id='from_email'
                autoComplete={false}
                required={true}
              />
              <label for='name' className='form__label'>
                From Email
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                placeholder='To Email'
                id='to_email'
                required={true}
                autoComplete={false}
              />
              <label for='email' className='form__label'>
                To Email
              </label>
            </div>
            <div className='form__group'>
              <button className='sharing__option-email-btn'>Send</button>
            </div>
          </form>
        </div>
      </div>
      {message && (
        <div className='upload__message'>
          <p className='upload__message-text'>&#10003;&nbsp;Copied</p>
        </div>
      )}
    </div>
  );
};

export default Workarea;
