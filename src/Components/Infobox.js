import React from 'react';
import ewpro from '../img/EWpro.jpg';
import pkpro from '../img/pappuK.png';
import sprite from '../img/sprite.svg';

const Infobox = () => {
  return (
    <div className='infobox__container'>
      <div className='infobox__title'>OXzip</div>
      <ul className='infobox__ul'>
        <li
          onClick={() => {
            window.open('https://reactjs.org', '_blank');
          }}
        >
          React JS
        </li>
        <li
          onClick={() => {
            window.open('https://nodejs.org/en/', '_blank');
          }}
        >
          Node JS
        </li>
        <li
          onClick={() => {
            window.open('https://www.mongodb.com', '_blank');
          }}
        >
          Mongo DB
        </li>
      </ul>
      <div className='infobox__creator--1 infobox__creator'>
        <div className='infobox__creator__box'>
          <div className='infobox__creator__icon'>
            <img
              className='infobox__creator__icon'
              src={ewpro}
              alt='Emmanuel Wilson Profile'
            />
          </div>
          <div className='infobox__creator__name'>Emmanuel Wilson</div>
          <div className='infobox__creator__info'>
            <ul>
              <li className='infobox__creator__info-item'>Front-end</li>
              <li className='infobox__creator__info-item'>Designing</li>
              <li className='infobox__creator__info-item'>Middleware</li>
            </ul>
          </div>
          <div className='infobox__creator__link'>
            <svg
              className='infobox__creator__link--1'
              onClick={() => {
                window.open('https://github.com/emwil23', '_blank');
              }}
            >
              <use xlinkHref={sprite + '#icon-github'} />
            </svg>
            <svg
              className='infobox__creator__link--2'
              onClick={() => {
                window.open('https://www.instagram.com/iam_e.w/', '_blank');
              }}
            >
              <use xlinkHref={sprite + '#icon-instagram'} />
            </svg>
          </div>
        </div>
      </div>
      <div className='infobox__creator--2 infobox__creator'>
        <div className='infobox__creator__box'>
          <div className='infobox__creator__icon'>
            <img
              className='infobox__creator__icon'
              src={pkpro}
              alt='Pappu Kumar Profile'
            />
          </div>
          <div className='infobox__creator__name'>Pappu Kumar Saw</div>
          <div className='infobox__creator__info'>
            <ul>
              <li className='infobox__creator__info-item'>Back-end</li>
              <li className='infobox__creator__info-item'>API's</li>
              <li className='infobox__creator__info-item'>Database Creation</li>
            </ul>
          </div>
          <div className='infobox__creator__link'>
            <svg
              className='infobox__creator__link--1'
              onClick={() => {
                window.open('https://github.com/pappu-kumar', '_blank');
              }}
            >
              <use xlinkHref={sprite + '#icon-github'} />
            </svg>
            <svg
              className='infobox__creator__link--2'
              onClick={() => {
                window.open(
                  'https://instagram.com/pappukumarsaw1?utm_medium=copy_link',
                  '_blank'
                );
              }}
            >
              <use xlinkHref={sprite + '#icon-instagram'} />
            </svg>
          </div>
        </div>
      </div>
      <div className='infobox__desc'>
        <p className='infobox__desc-text'>
          This is a demo application made just for showcase use. All rights of
          the design and code is reserved by the creators of this app.
        </p>
      </div>
    </div>
  );
};

export default Infobox;
