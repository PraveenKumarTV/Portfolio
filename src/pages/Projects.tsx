import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple cities. Built with React and OpenWeather API.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    technologies: ['React', 'TypeScript', 'OpenWeather API'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management system with real-time updates, built using React and Firebase.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Github className="h-5 w-5 mr-1" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;