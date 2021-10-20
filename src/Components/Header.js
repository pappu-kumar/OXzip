import React from 'react';
import Workarea from './Workarea';

import logo from '../img/X.png';
import { RiProjectorLine } from 'react-icons/ri';
import { RiAliensLine } from 'react-icons/ri';
import { RiContrastLine } from 'react-icons/ri';

const Header = (route) => {
  console.log(route);
  return (
    <div className='header'>
      <ul className='header__ul'>
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
              route = 'main';
            }}
          />
        </li>
        <li class='header__li--aboutus'>
          <RiAliensLine className='header__li--aboutus-1' />
        </li>
        <li class='header__li--theme'>
          <RiContrastLine className='header__li--theme-1' />
        </li>
      </ul>
    </div>
  );
};

export default Header;
