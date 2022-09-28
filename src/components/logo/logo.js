import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
      <div className='ma4 mt0'>
        <Tilt className='tilt'>
          <div>
            <img src={ brain } alt='brain'></img>
          </div>
        </Tilt>
      </div>
  );
}

export default Logo;