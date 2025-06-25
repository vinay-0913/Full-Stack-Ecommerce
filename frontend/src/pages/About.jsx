import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About '} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Forever, we believe fashion should be effortless, expressive, and accessible. Born from a love for timeless style and modern trends, we bring you handpicked collections that blend comfort, quality, and individuality. Whether you're dressing up or winding down, our pieces are designed to fit your life—beautifully.
              Welcome to a wardrobe that speaks your style.</p>
            <b className='text-gray-800 text-1xl'>Our Mission</b>
            <p>ur mission is to empower individuals to express themselves through fashion that feels as good as it looks. We’re here to redefine everyday style—by offering high-quality, affordable clothing that’s thoughtfully curated, sustainably sourced, and always on-trend. </p>
          </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'Why '} text2={'Choose Us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias tempore animi cum rem praesentium fuga cupiditate unde facilis reprehenderit odio distinctio, explicabo expedita sapiente nostrum? Est eius reprehenderit quod?</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias tempore animi cum rem praesentium fuga cupiditate unde facilis reprehenderit odio distinctio, explicabo expedita sapiente nostrum? Est eius reprehenderit quod?</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius alias tempore animi cum rem praesentium fuga cupiditate unde facilis reprehenderit odio distinctio, explicabo expedita sapiente nostrum? Est eius reprehenderit quod?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About