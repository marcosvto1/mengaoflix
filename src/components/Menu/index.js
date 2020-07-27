import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from '../../components/Button';

const Menu = () => {
    return (
      
        <nav className="Menu">
              <a href="/">
                <img src={Logo} className="Logo" alt="MengoFlix Logo"/>
              </a>

              <Button  as="a" className="ButtonLink" href="/">
                Novo Vídeo
              </Button>
        </nav>
    );
}

export default Menu;