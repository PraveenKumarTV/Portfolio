import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;