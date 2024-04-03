import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterButton from '../shared/FooterButtonProcceed';

// Define language data
const languagesData = [
  { name: 'Hindi', nativeName: 'हिन्दी', borderColor: '#F10086' },
  { name: 'English', nativeName: 'English', borderColor: '#f4c5c2' },
  { name: 'Bangla', nativeName: 'বাংলা', borderColor: '#f4c5c2' },
  { name: 'Kannada', nativeName: 'ಕನ್ನಡ', borderColor: '#f4c5c2' },
  { name: 'Odisa', nativeName: 'ଓଡ଼ିଆ', borderColor: '#f4c5c2' },
  { name: 'Assamese', nativeName: 'অসমীয়া', borderColor: '#f4c5c2' },
  { name: 'Marathi', nativeName: 'मराठी', borderColor: '#F7D7D5' },
  { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', borderColor: '#f4c5c2' },
  { name: 'Tamil', nativeName: 'தமிழ்', borderColor: '#f4c5c2' },
  { name: 'Malayalam', nativeName: 'മലയാളം', borderColor: '#f4c5c2' },
  { name: 'Gujarati', nativeName: 'ગુજરાતી', borderColor: '#f4c5c2' },
];

const ChooseLanguage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleProceedClick = () => {
    navigate('/chats');
  };

  return (
    <div>
      <h1 className='text-[#D9352E] text-xl font-bold text-center sm:p-3 p-6 font-poppins'>Choose Language</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-8 mx-4 sm:mx-16 py-2 text-[#D9352E] text-sm'>
        {languagesData.map((language, index) => (
          <div
            key={index}
            className={`bg-[#F7D7D5] border-2 border-${language.borderColor} w-[100%] h-[90%] py-1 flex flex-col items-center justify-center rounded-2xl font-lato ${selectedLanguage === language.name && 'outline'}`}
            onClick={() => handleLanguageClick(language.name)}
          >
            <p className='font-bold'>{language.name}</p>
            <p className='text-xs '>{language.nativeName}</p>
          </div>
        ))}
      </div>
      <FooterButton onClick={handleProceedClick} />
    </div>
  );
}

export default ChooseLanguage;
