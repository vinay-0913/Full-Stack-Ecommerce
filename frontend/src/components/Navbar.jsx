import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { FaLocationDot } from "react-icons/fa6"; 

const Navbar = () => {
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems, selectedLocation, setSelectedLocation } = useContext(ShopContext)

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})

  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt='logo' /></Link>
      <ul className='hidden sm:flex gap-8 text-md text-grey-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 '>
          <p>About</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6' >
        {/* Location Icon + Dropdown */}
        <div className='relative w-18'>
          <div className='flex items-center gap-1 cursor-pointer' onClick={() => setShowLocationDropdown(!showLocationDropdown)}>
            <FaLocationDot className='h-5 w-5' />
            <span className='text-sm text-gray-700'>{selectedLocation || 'Location'}</span>
          </div>
          {showLocationDropdown && (
            <div className='absolute text-center right-0 mt-2 w-25 bg-white border border-gray-400 rounded shadow-md z-10'>
              {['Durg', 'Bhilai', 'Raipur'].map((city) => (
                <div
                  key={city}
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm'
                  onClick={() => {
                    setSelectedLocation(city);
                    setShowLocationDropdown(false);
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' />
          {/* Dropdown Menu */}
          {token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-2 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          }
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white spect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
