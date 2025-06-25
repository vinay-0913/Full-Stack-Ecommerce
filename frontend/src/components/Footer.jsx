import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ' >
            <div>
                <img src={assets.logo} className='md-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    At Forever, we believe fashion should be effortless, expressive, and accessible. Born from a love for timeless style and modern trends, we bring you handpicked collections that blend comfort, quality, and individuality.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-789 </li>
                    <li>contact@forveryou.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='border border-gray-300'/>
            <p className='py-5 text-sm text-center'>Copyright 2025 @ forver.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer