import React from 'react'

const NewsLetterBox = () => {

   const onSubmitHandler = (event)=>{
           event.preventDefault();
   }

  return (
    <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subcribe Now to get 20% Discount</p>
          <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores possimus cumque excepturi, modi iusto corrupti saepe explicabo doloremque tenetur vitae magnam! Voluptates quasi commodi laborum praesentium tempore eligendi cumque.
          </p>

          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder="Enter Your Email" required />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4 '>SUBSCRIBE</button>
          </form>
    
    </div>
  )
}

export default NewsLetterBox