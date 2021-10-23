import React from 'react';

import logo from '../img/X.png';
import { RiProjectorLine } from 'react-icons/ri';
import { RiAliensLine } from 'react-icons/ri';
import { RiContrastLine } from 'react-icons/ri';

const Header = (props) => {
  return (
    <div className='header'>
      <ul className='header__ul' id='ul-prop'>
        <li class='header__li--icon'>
          <img
            src={logo}
            className='header__li--icon-1'
            alt='website logo ofr us'
          />
        </li>
        <li className='header__li--main'>
          <RiProjectorLine
            className='header__li--main-1'
            alt='Main'
            onClick={() => {
              console.log(props.change);
              props.change('work');
            }}
          />
        </li>
        <li class='header__li--aboutus'>
          <RiAliensLine
            className='header__li--aboutus-1'
            alt='Info'
            onClick={() => {
              console.log(props.change);
              props.change('info');
            }}
          />
        </li>
        <li class='header__li--theme'>
          <RiContrastLine
            className='header__li--theme-1'
            alt='Theme'
            onClick={() => {
              props.theme === 'light'
                ? props.changeTheme('dark')
                : props.changeTheme('light');
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
