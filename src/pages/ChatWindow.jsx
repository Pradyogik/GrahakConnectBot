import React, { useState } from 'react';

import Navbar from '../shared/Navbar';
import ChatPage from '../components/ChatPage';
import '../styles/Chat.css';
import CloseButton from '../shared/CloseButton';

const ChatWindow = () => {
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
        <div className={`fixed bottom-10 right-10 sm:bottom-20 sm:right-10 w-full sm:w-[95%] h-[90%] sm:h-[75%] md:w-[30rem] lg:w-[35rem] rounded-xl shadow-lg bg-white ${animationClass}`}>
          <Navbar text="Government E-marketplace" url="/language" />
          <ChatPage />
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

export default ChatWindow;