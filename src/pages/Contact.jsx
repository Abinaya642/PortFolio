import React, { useContext } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  const { Theme } = useContext(ThemeContext);
  return (
    <section
      id="Contact"
      className={`min-h-screen flex items-center justify-center ${
        Theme === "light"
          ? "bg-white"
          : "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
      } p-6 md:p-12`}
    >
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1
            className={` text-4xl ${
              Theme === "light" ? "text-purple-700" : "text-white"
            } mt-12 font-bold mb-4`}
          >
            Get in Touch
          </h1>
          <p
            className={`text-lg md:text-xl font-bold ${
              Theme === "light" ? " text-purple-700" : "text-white"
            }`}
          >
            I’d love to work with you! Reach out through any of the methods
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          <div
            data-aos="zoom-out-right"
            data-aos-duration="1000"
            className={`p-8 ${
              Theme === "light" ? "bg-purple-300" : "bg-purple-100"
            } rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 text-center`}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-3xl"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Email</h3>
            <p
              className={`${
                Theme === "light" ? " text-white" : "text-gray-700"
              } mb-4`}
            >
              Feel free to email me:
            </p>
            <a
              href="mailto:abinayasakthi942@gmail.com"
              className="text-purple-700 font-semibold hover:text-purple-900"
            >
              abinayasakthi942@gmail.com
            </a>
          </div>

          <div
            className={`p-8 ${
              Theme === "light" ? "bg-purple-300" : "bg-purple-100"
            } rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 text-center`}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-white text-3xl"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Phone</h3>
            <p
              className={`${
                Theme === "light" ? " text-white" : "text-gray-700"
              } mb-4`}
            >
              Give me a call:
            </p>
            <a
              href="tel:+916374555739"
              className="text-purple-700 font-semibold hover:text-purple-900"
            >
              +91 6374555739
            </a>
          </div>

          <div
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className={`p-8 ${
              Theme === "light" ? "bg-purple-300" : "bg-purple-100"
            } rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 text-center`}
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-white text-3xl"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">
              Location
            </h3>
            <p
              className={`${
                Theme === "light" ? " text-white" : "text-gray-700"
              } mb-4`}
            >
              Find me here:
            </p>
            <p className="text-purple-700 font-semibold">
              18/G 4th Street, Sankaralingapuram, Kovilpatti, India
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3
            className={`text-2xl font-semibold ${
              Theme === "light" ? "text-purple-700" : "text-white"
            } mb-6`}
          >
            Connect with Me
          </h3>
          <div
            className={`flex justify-center gap-8 text-4xl ${
              Theme === "light" ? "text-purple-700" : "text-white"
            }`}
          >
            <a
              href="https://linkedin.com/in/abinaya34"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Abinaya642"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://abinaya34.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-transform transform hover:scale-110"
            >
              🌐
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
