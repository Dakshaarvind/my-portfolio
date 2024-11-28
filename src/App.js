import React, { useEffect } from 'react';

const PortfolioWebsite = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        
        window.scrollTo({
          top: offsetTop - 64, // 64px is the height of the navbar
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B2E] to-[#2A2744] text-white relative overflow-hidden">
      {/* Navigation Dashboard */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1E1B2E]/80 backdrop-blur-md z-50 border-b border-purple-500/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group py-2"
                >
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delay"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-purple-500/30 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-500/20 rotate-45 animate-bounce-slow"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping delay-700"></div>
          
          {/* Animated lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-scan"></div>
            <div className="absolute left-[80%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-scan delay-1000"></div>
          </div>
        </div>

        <header id="home" className="py-16 relative">
          <div className="max-w-4xl mx-auto flex items-center gap-8">
            {/* Image container with interactive effects */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:scale-105"></div>
              <img 
                src="/portfpic1.webp" 
                alt="Profile" 
                className="relative w-72 h-auto object-cover rounded-lg shadow-xl hover:scale-[1.02] transition-all duration-300 group-hover:shadow-2xl shadow-purple-500/20" 
              />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            <div className="text-left">
              {/* Animated dots with trails */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce">
                    <div className="absolute w-full h-full bg-purple-500 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100">
                    <div className="absolute w-full h-full bg-blue-500 rounded-full animate-ping opacity-20 delay-100"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200">
                    <div className="absolute w-full h-full bg-indigo-500 rounded-full animate-ping opacity-20 delay-200"></div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Hi! I'm Daksha, a Software Engineer
              </h1>
              <p className="text-lg text-gray-400 hover:text-gray-300 transition-colors duration-300">
                A passionate software engineer with expertise in building robust, scalable applications.
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto py-8">
          <section id="experience" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="flex justify-between">
              <div className="bg-[#2E2A47] p-4 rounded-lg shadow-md flex-1 mr-4">
                <h3 className="text-xl font-bold">See what I've done</h3>
                <p className="text-gray-400">Tap to view details</p>
              </div>
              <div className="bg-[#2E2A47] p-4 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-bold">See my skills</h3>
                <p className="text-gray-400">Tap to view details</p>
              </div>
            </div>
          </section>

          <section id="projects" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Example Project</h2>
            <div className="bg-[#2E2A47] p-4 rounded-lg shadow-md">
              <img src="/api/placeholder/600/400" alt="Example Project" className="mb-4" />
              <h3 className="text-xl font-bold">Example Project</h3>
              <p>This is an example of a project I've worked on. You can see the details here.</p>
              <button className="bg-[#3F3A5F] text-white px-4 py-2 rounded-lg mt-4">View Project</button>
            </div>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="bg-[#2E2A47] p-4 rounded-lg shadow-md">
              <p>Let's get in touch!</p>
              <div className="flex justify-center mt-4">
                <a href="#" className="text-white hover:text-gray-400 mr-4">LinkedIn</a>
                <a href="#" className="text-white hover:text-gray-400">GitHub</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#3F3A5F] py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioWebsite;