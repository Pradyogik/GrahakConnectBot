import React from 'react';
import back from '../images/back.svg';

const CloseButton = ({ onClick, rotation }) => {
  return (
    <button 
      className=' bg-[#D9352E]  rounded-full flex items-center justify-center   fixed sm:px-4 sm:py-3 px-4 py-3 right-4 sm:right-10 bottom-[1rem] sm:bottom-[1rem] '
      style={{ transform: rotation } }  onClick={onClick}
    >
      <img src={back} alt="Back" className='h-[1rem] sm:h-[1.5rem]  w-full' />
    </button>
  );
};

export default CloseButton;