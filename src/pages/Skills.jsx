import React, { useContext } from 'react'
import theme_pattern from '../assets/theme_pattern.svg';
import html5 from '../assets/html5.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import web from '../assets/web.png'
import { ThemeContext } from '../ThemeContext'

const skills = [
  { name: "HTML5", icon: html5, description: "Markup Language" },
  { name: "CSS3", icon: css, description: "Styling Language" },
  { name: "JavaScript", icon: javascript, description: "Programming Language" },
  { name: "React", icon: react, description: "JavaScript Library" },
  { name: "Redux", icon: redux, description: "State Management" },
  { name: "Web Development", icon: web, description: "Full-stack Development" },
];

export const Skills = () => {
  const {Theme}=useContext(ThemeContext)
  return (
    <div className="text-gray-700 min-h-screen">
      <section id="Skills" className="py-16">
        <div className="container mx-auto text-center">
        <div className='flex justify-center'>
      <h1 className={`text-4xl font-bold text-center mt-12 ${Theme === "light" ? 'text-purple-700' : 'text-white'}`}>My Skills</h1>
      <img className='h-16 w-16  ml-2 mt-12 pb-3' src={theme_pattern} alt="Theme Pattern" />
          </div>
          <p className={`mt-2 text-lg  ${Theme === "light" ? 'text-gray-600' : 'text-gray-200'}  font-bold`}>
            A collection of the tools and technologies I use to build web applications.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-6"  data-aos="fade-up-left" data-aos-duration="1000">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${Theme === "light" ? 'bg-purple-300' : 'bg-purple-100'} p-8 rounded-xl transform transition-transform duration-300  hover:scale-105 text-center`}
            >
              <div className="flex justify-center">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              </div>
              <h2 className="text-xl font-bold text-purple-600">{skill.name}</h2>
              <p className="text-gray-500 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${Theme === "light" ? 'bg-purple-500' : 'bg-purple-600'} py-12 mt-8 text-center`}>
        <h2 className="text-3xl text-white font-semibold">
          Want to see these skills in action?
        </h2>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          View My Projects
        </a>
      </section>
    </div>
  )
}

