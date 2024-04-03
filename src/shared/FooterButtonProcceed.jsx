import React from 'react';

const FooterButton = ({ onClick }) => {
    return (
        <div className='flex justify-center mt-3'>
            <button onClick={onClick} className='bg-[#D9352E] px-7 py-2 text-white text-sm font-bold rounded-lg font-lato'>
                PROCEED
            </button>
        </div>
    );
};

export default FooterButton;
