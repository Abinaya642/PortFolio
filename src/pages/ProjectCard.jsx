import React, { useContext } from 'react';
import skills from '../assets/home.png'
import { ThemeContext } from '../ThemeContext';

const ProjectCard = ({ project }) => {
  const {Theme}=useContext(ThemeContext);
  return (
      
    <div className=' items-center bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-lg rounded-lg overflow-hidden border border-gray-300 transform transition-transform duration-300 hover:scale-105'>
    
      <div className='relative'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-48 '
        />

      </div>
      <div className={`p-6  ${Theme === "light" ? 'bg-purple-100' : 'bg-purple-200'}`}>
        <h3 className='text-2xl font-bold text-gray-800 mb-3'>{project.title}</h3>
        <p className='text-gray-700 mb-4'>{project.description}</p>
        <div className='flex gap-4 sm:gap'>
          {project.demoLink && (
            <a
              href={project.demoLink}
              
              className='bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-800  flex items-center space-x-2'
            >
              <span>Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-800 flex items-center space-x-2'
            >
              <span>Repo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



