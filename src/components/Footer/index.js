import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt='Classiflix Logo'></img>
      <p>
        &copy; Cassiflix
      </p>
    </FooterBase>
  );
}

export default Footer;
