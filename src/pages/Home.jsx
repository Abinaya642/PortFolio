import React, { useContext } from 'react';
import home from '../assets/home.png';
import { ThemeContext } from '../ThemeContext';

export default function Home() {
  const { Theme } = useContext(ThemeContext);

  return (
    <section id='home' className='flex flex-col justify-center items-center gap-6 p-4 md:p-8 lg:p-16'>
      <img
        className='w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full shadow-lg mt-8'
        src={home}
        alt='Abinaya profile'
      />

      <h1
        className={`text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 ${
          Theme === 'light' ? 'text-purple-700' : 'text-white'
        }`}
      >
        Hi! I'm Abinaya, Frontend Developer
      </h1>

      <div
        className={`font-semibold text-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 mb-2 ${
          Theme === 'light' ? 'text-gray-700' : 'text-purple-950'
        }`}
      >
        <p className='mb-4'>
          Specializing in front-end development to build websites that are as functional as they are beautiful.
        </p>
        <p>
          Passionate about frontend technologies and committed to building the web of tomorrow.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
        <a
          href='#Contact'
          className={`font-bold transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 ${
            Theme === 'light' ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-600'
          } rounded-full px-4 py-2 sm:px-6 sm:py-3`}
        >
          Connect With Me
        </a>
        <a
          href='#Resume'
          className={`font-bold transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 ${
            Theme === 'light' ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-600'
          } rounded-full px-4 py-2 sm:px-6 sm:py-3`}
        >
          My Resume
        </a>
      </div>
    </section>
  );
}
