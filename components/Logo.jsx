import React from 'react';
import { FaCode } from 'react-icons/fa';

function Logo() {
  return (
    <div className="flex items-center justify-center p-2">
      <FaCode className="text-3xl text-primary mr-2" /> 
      <a href="/" className="text-2xl font-bold tracking-wider text-primary">
        IntraCobroid
      </a>
    </div>
  );
}

export default Logo;
