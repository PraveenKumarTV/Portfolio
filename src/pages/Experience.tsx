import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    period: 'Jun 2023 - Aug 2023',
    description: [
      'Developed and maintained RESTful APIs using Node.js and Express',
      'Implemented new features in React-based web application',
      'Collaborated with senior developers on code reviews and testing'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'University Lab',
    location: 'Boston, MA',
    period: 'Jan 2023 - May 2023',
    description: [
      'Conducted research on machine learning algorithms',
      'Implemented data processing pipelines in Python',
      'Published findings in academic conference'
    ]
  }
];

const education = [
  {
    degree: 'B.S. in Computer Engineering',
    school: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    period: '2019 - 2023',
    details: [
      'GPA: 3.8/4.0',
      'Relevant Coursework: Data Structures, Algorithms, Machine Learning',
      'Senior Thesis: "Optimization of Neural Networks for Edge Devices"'
    ]
  }
];

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Experience</h1>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-lg text-blue-600 mb-2">{exp.company}</p>
              <div className="flex items-center text-gray-600 mb-4 space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {exp.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {exp.location}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
            <p className="text-lg text-blue-600 mb-2">{edu.school}</p>
            <div className="flex items-center text-gray-600 mb-4 space-x-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {edu.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {edu.location}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;