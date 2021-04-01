import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/Buildings.svg';

export default () => {
    return (
      <div id="page-landing">
          <div className="content-wrapper">
          <img src={logoImg} alt="Straight Build"/>
  
          <main>
              <h1>Construa no lugar ideal</h1>
              <p>Simule o aproveitamento de construir em determinados terrenos.</p>
          </main>
  
          <div className="location">
              <strong>Blumenau</strong>
              Santa Catarina
          </div>
  
          <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
          </Link>
          </div>
      </div>
    );
  };