import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import theme_pattern from "../assets/theme_pattern.svg";
import { ThemeContext } from "../ThemeContext";


const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    description:
      "An ecommerce website built using HTML, CSS, and JavaScript. Features include product listings, a shopping cart, and a checkout process.",
    image: "https://www.shopweb.in/images/imageforecommercewebsite.jpg",
    demoLink: "https:",
    repoLink: "https://github.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A portfolio website showcasing various projects and skills, developed using ReactJS and Tailwind CSS.",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/squarespace-portfolio-website-builder.jpg",
    demoLink: "https://abinaya34.netlify.app",
    repoLink: "https://github.com/yourusername/portfolio-website",
  },
  {
    id: 3,
    title: "Todo List App",
    description:
      "A simple todo list app built with HTML, CSS, and JavaScript. Allows users to add, delete, and mark tasks as completed.",
    image: "https://repository-images.githubusercontent.com/282777521/9b9c6a80-d04d-11ea-8183-8d14d9419354",
    demoLink: "https://example.com/todo-demo",
    repoLink: "https://github.com/yourusername/todo-list-app",
  },
];

export const Projects = () => {
  const { Theme } = useContext(ThemeContext);
  return (
    <section id="projects" className="py-8 px-4 md:px-8">
      <div className="flex justify-center mb-6 mt-20">
        <h1
          className={`text-4xl font-bold mb-6 text-center ${
            Theme === "light" ? "text-purple-700" : "text-white"
          }`}
        >
          My Projects
        </h1>
        <img
          className="h-16 w-16 mb-4 ml-2 pb-3"
          src={theme_pattern}
          alt="Theme Pattern"
        />
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6" data-aos="zoom-out"
     data-aos-duration="1000">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
    </section>
  );
};
