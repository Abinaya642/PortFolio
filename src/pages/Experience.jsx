import React, { useContext } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import theme_pattern from "../assets/theme_pattern.svg";
import { ThemeContext } from "../ThemeContext";

const experiences = [
  {
    company: "ICT Academy Open Weaver",
    position: "Full Stack Development Intern",
    duration: "Jan 2023",
    responsibilities: [
      "Developed full-stack applications focusing on both frontend and backend technologies.",
      "Utilized various tools and frameworks for web development.",
      "Engaged in workshops and training sessions to enhance full-stack development skills.",
    ],
  },
  {
    company: "Wiz Inoa",
    position: "MERN Stack Intern",
    duration: "Jan 2024 - Jun 2024",
    location: "Madurai",
    responsibilities: [
      "Assisted in developing full-stack applications with MongoDB, Express.js, React.js, and Node.js.",
      "Created RESTful APIs and integrated them with frontend applications.",
      "Gained experience in deploying applications on cloud platforms.",
      "Collaborated with mentors and participated in team meetings on various projects.",
    ],
  },
];

export const Experience = () => {
  const {Theme}=useContext(ThemeContext)
  return (
    <section
      id="Experience"
      className="py-16 "
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className='flex justify-center'>
      <h1 className={`text-4xl mt-12 font-bold mb-6 text-center ${Theme === "light" ? 'text-purple-700' : 'text-white'}`}>Professional Experience</h1>
      <img className='h-16 w-16 mb-4 ml-2 pb-3 mt-12' src={theme_pattern} alt="Theme Pattern" />
          </div>
        <div className="space-y-8 lg:space-y-12" >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative p-6 lg:p-8  ${Theme === "light" ? 'bg-purple-300' : 'bg-purple-100'} shadow-lg rounded-xl border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl`}
              data-aos="zoom-in-up" data-aos-duration="1000">
              {/* Decorative Element */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 opacity-20 rounded-xl"></div>

              <div className="relative flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl">
                  <FaBriefcase />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {exp.position}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <p className="text-sm md:text-base text-gray-600 flex items-center mt-1">
                      <FaMapMarkerAlt className="mr-2 text-gray-500" />
                      {exp.location}
                    </p>
                  )}
                  <p className="text-sm md:text-base text-gray-600 flex items-center mt-1">
                    <FaCalendarAlt className="mr-2 text-gray-600" />
                    {exp.duration}
                  </p>
                </div>
              </div>
              <ul className="mt-6 list-disc list-inside text-gray-900 space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-sm md:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
