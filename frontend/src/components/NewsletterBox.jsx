import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '>
           Subscribe now and get 20% off
        </p>
        <p className='text-gray-400 mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit dicta provident. Sequi animi temporibus rerum eveniet id adipisci placeat exercitationem minus veritatis nemo, nisi accusamus laudantium illum harum? Voluptatum!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:felx-1 outline-none' type="emal" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox