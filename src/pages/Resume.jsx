import React, { useContext } from 'react'
import resume from '../assets/Resume.jpg'
import Abinaya from '../assets/Abinaya-Resume.pdf'
import theme_pattern from '../assets/theme_pattern.svg'
import { ThemeContext } from '../ThemeContext'

export const Resume = () => {
    const {Theme}=useContext(ThemeContext)
  return (
    <section id='Resume'>
  <div className="flex flex-col items-center justify-center min-h-screen p-6">
  <div className="flex justify-center mb-6 mt-20">
        <h1
          className={`text-4xl font-bold mb-6 text-center ${
            Theme === "light" ? "text-purple-700" : "text-white"
          }`}
        >
          My Resume
        </h1>
        <img
          className="h-16 w-16 mb-4 ml-2 pb-3"
          src={theme_pattern}
          alt="Theme Pattern"
        />
      </div>   
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="shadow-lg rounded-lg overflow-hidden border-4 border-purple-700 bg-purple-50 w-full md:w-1/2 lg:w-1/3 mb-6">
      <img
        src={resume}
        alt="Resume Preview"
        className="w-full h-auto"
      />
    </div>

    <a
      href="/resume.pdf"
      download={Abinaya}
      className="mt-4 bg-purple-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-800"
    >
      Download Resume
    </a>
  </div>
</section>

  )
}
