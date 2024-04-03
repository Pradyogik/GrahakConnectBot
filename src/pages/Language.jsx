import React, { useState } from 'react';
import ChooseLanguage from '../components/ChooseLanguage';
import CloseButton from '../shared/CloseButton';
import Navbar from '../shared/Navbar';

const Language = () => {
  const [showComponents, setShowComponents] = useState(true);
  const [animationClass, setAnimationClass] = useState('animate-jump-in');
  const [buttonRotation, setButtonRotation] = useState('rotate(270deg)');

  const handleClose = () => {
    setAnimationClass('animate-jump-out');
    setButtonRotation('rotate(90deg)');
    setTimeout(() => setShowComponents(false), 500); // Adjust the timeout to match your animation duration
  };

  const handleOpen = () => {
    setAnimationClass('animate-jump-in');
    setButtonRotation('rotate(270deg)');
    setShowComponents(true);
  };

  return (
    <>
      {showComponents && (
        <div className={`w-[95%] h-[90%] p-4 sm:p-0 sm:w-1/2 sm:h-[75%] md:w-1/3 lg:w-1/4 fixed right-5 bottom-15  sm:bottom-20 sm:right-10 rounded-3xl shadow-lg bg-gray ${animationClass}`}>
          <Navbar text="Government E-marketplace" url="/"/>
          <ChooseLanguage />
        </div>
      )}
      {!showComponents && (
        <div className=' w-[25rem] h-[35rem] sm:w-[25rem] sm:h-[28rem] rounded-full flex items-center justify-center fixed right-3 bottom-20 sm:bottom-20 sm:right-10 '>
        </div>
      )}
      <div className='w-[10%] h-[10%] fixed right-5 bottom-15 sm:bottom-20 sm:right-10'>
        <CloseButton rotation={buttonRotation} onClick={showComponents ? handleClose : handleOpen} />
      </div>
    </>
  );
};

export default Language;