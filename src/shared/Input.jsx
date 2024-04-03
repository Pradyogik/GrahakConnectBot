import React from 'react'
import Microphone from '../images/Microphone.svg'
import send from '../images/send.svg'
const Input = () => {
  return (
    <div className='flex w-full  items-center py-1 px-3'>
    <div className='flex-grow w-[80%]  flex items-center  border-2 border-gray-300  rounded-3xl px-5 py-1 bg-white'>
        <input type='text' className='flex-grow bg-transparent outline-none' placeholder='शुरू करें...' />
        <img src={Microphone} alt="Microphone" className='ml-2 h-[10%] w-[5%]' />
    </div>
    <button className='ml-2 bg-[#D9352E] p-2 rounded-full'>
        <img src={send} alt="Send" className='h-6 w-full' />
    </button>
</div>
  )
}

export default Input
