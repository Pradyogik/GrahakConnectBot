import React, { useState } from 'react';

const Namaste = () => {
  const [language, setLanguage] = useState('Hindi');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const getText = () => {
    switch (language) {
      case 'Hindi':
        return 'नमस्ते';
      case 'Tamil':
        return 'வணக்கம்';
      case 'Telugu':
        return 'నమస్కారం';
      default:
        return 'नमस्ते';
    }
  };

  return (
    <div>
      <h1 className='text-[#D9352E] text-5xl text-center pt-3 font-extrabold font-PalanquinDark'>
        {getText()}
      </h1>
      <select value={language} onChange={handleLanguageChange}>
        <option value='Hindi'>Hindi</option>
        <option value='Tamil'>Tamil</option>
        <option value='Telugu'>Telugu</option>
      </select>
    </div>
  );
};

export default Namaste;