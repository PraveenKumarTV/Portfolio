import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Praveen Kumar
            <br />
            <span className="text-blue-600">Software Engineer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Recent engineering graduate specializing in full-stack development,
            with a passion for building scalable web applications and solving
            complex problems.
          </p>
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
            alt="Professional headshot"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'JavaScript/TypeScript',
            'React.js',
            'Node.js',
            'Python',
            'AWS',
            'Docker',
            'Git',
            'SQL/NoSQL'
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-800 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;