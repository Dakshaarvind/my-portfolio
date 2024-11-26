import React, { useState } from 'react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'experience':
        return <ExperiencePage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">Your Name</span>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('home')} 
              className="hover:text-blue-600"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('experience')} 
              className="hover:text-blue-600"
            >
              Experience
            </button>
            <button 
              onClick={() => setCurrentPage('skills')} 
              className="hover:text-blue-600"
            >
              Skills
            </button>
            <button 
              onClick={() => setCurrentPage('projects')} 
              className="hover:text-blue-600"
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}

      <footer className="bg-white p-4 text-center mt-8">
        <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <img 
          src="/api/placeholder/200/200" 
          alt="Profile" 
          className="rounded-full w-48 h-48 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl text-gray-600 mb-6">
          A passionate [Your Profession] with expertise in [Key Areas]
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const experiences = [
    {
      company: 'Company Name',
      role: 'Job Title',
      duration: 'Start Date - End Date',
      description: 'Key responsibilities and achievements'
    },
    // Add more experiences
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
      <div className="max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
            <p className="text-gray-600 mb-2">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java']
    },
    {
      category: 'Frameworks',
      skills: ['React', 'Node.js', 'Express']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'VS Code']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-2xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      name: 'Project Name',
      description: 'Brief project description',
      technologies: ['React', 'Node.js'],
      link: 'https://github.com/username/project'
    },
    // Add more projects
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-2xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;