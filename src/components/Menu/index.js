import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      
        <nav className="Menu">
              <Link to="/">
                <img src={Logo} className="Logo" alt="MengoFlix Logo"/>
              </Link>

              <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
              </Button>
        </nav>
    );
}

export default Menu;