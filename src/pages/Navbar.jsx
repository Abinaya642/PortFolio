import React, { useContext, useState } from 'react';
import logo from '../assets/logo1.svg';
import { ThemeContext } from '../ThemeContext';
import './Navbar.css';

export const Navbar = () => {
  const { Theme, HandleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`flex items-center justify-around p-2 fixed top-0 left-0 w-full z-50 ${
        Theme === 'light'
          ? 'bg-purple-800'
          : 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500'
      }`}
      style={{ overflowX: 'hidden' }} // To Prevent horizontal overflow
    >
      <div className='h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-16 lg:w-16'>
        <img src={logo} alt='Logo' className='h-full w-full object-contain' />
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='md:hidden text-white focus:outline-none'>
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
        </svg>
      </button>

      <ul className='hidden md:flex space-x-4 lg:space-x-6 font-bold text-white md:text-sm lg:text-xl xl:text-2xl'>
        <li><a href='#home' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>Home</a></li>
        <li><a href='#About' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>About</a></li>
        <li><a href='#Skills' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>Skills</a></li>
        <li><a href='#Experience' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>Experience</a></li>
        <li><a href='#projects' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>Projects</a></li>
        <li><a href='#Resume' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>Resume</a></li>
        <li><a href='#Contact' className={`${Theme==="light" ? 'hover:tracking-widest hover:text-purple-300' :'hover:text-purple-700 hover:tracking-widest'}`}>Contact</a></li>
      </ul>

      <button onClick={HandleTheme} className='text-white font-semibold md:text-sm lg:text-xl xl:text-2xl'>
        Theme
      </button>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-purple-200 text-purple-700`}>
        <ul className='flex flex-col space-y-4 p-4'>
          <li><a href='#home' onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href='#About' onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href='#Skills' onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href='#Experience' onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href='#projects' onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href='#Resume' onClick={() => setIsMenuOpen(false)}>Resume</a></li>
          <li><a href='#Contact' onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
