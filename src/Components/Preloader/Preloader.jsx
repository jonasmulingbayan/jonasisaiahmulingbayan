import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="half-circle-spinner">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>
  );
};

export default Preloader;
