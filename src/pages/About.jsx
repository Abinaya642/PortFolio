import React, { useContext } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import skills from '../assets/skills.png';
import { ThemeContext } from '../ThemeContext';

export default function About() {
  const { Theme } = useContext(ThemeContext);

  return (
    <section id='About' className='py-8 px-4 md:px-8 '>
      <div className='container mx-auto '>
        <div className='flex flex-col items-center mb-12'>
        <div className='flex justify-center'>
      <h1 className={`text-4xl font-bold mb-4 text-center mt-20 ${Theme === "light" ? 'text-purple-700' : 'text-white'}`}>About Me</h1>
      <img className='h-16 w-16 mb-4 ml-2 pb-3 mt-20' src={theme_pattern} alt="Theme Pattern"/>
          </div>
          </div>
<div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-shrink-0' data-aos="zoom-out-right" data-aos-duration="1000">
            <img className='w-full h-80 object-cover rounded-lg shadow-lg' src={skills} alt="Skills" />
          </div>
          <div className={`flex-1 ${Theme === "light" ? 'text-gray-700' : 'text-gray-200'}`} data-aos="zoom-out-left" data-aos-duration="1000">
            <p className="mb-6 text-lg leading-relaxed">
              Hi! I'm <strong className='font-semibold'>Abinaya</strong>, a passionate Frontend Developer with a knack for creating beautiful and functional user interfaces. I specialize in crafting engaging web experiences using modern technologies and best practices.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              With a strong foundation in HTML, CSS, and JavaScript, I leverage libraries and frameworks like React.js and Tailwind CSS to build responsive and dynamic web applications. My goal is to transform complex ideas into seamless digital experiences that delight users and drive results.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              When I’m not coding, you can find me exploring the latest tech trends, participating in hackathons, or diving into a good book. I believe in the power of continuous learning and always strive to improve my skills and knowledge.
            </p>
            <p className="text-lg leading-relaxed">
              I’m excited about the opportunity to bring my expertise and enthusiasm to new challenges. Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
