import React, { useEffect } from 'react';
import './App.css';
const PortfolioWebsite = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        
        window.scrollTo({
          top: offsetTop - 64,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#1B2432] text-white relative overflow-hidden">
      {/* Navigation Dashboard */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-[#0D1117]/90 backdrop-blur-md z-50 rounded-full px-16 py-3 border border-[#4DD0E1]/20 shadow-lg shadow-[#4DD0E1]/10">
        <div className="flex items-center gap-10">
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
              <span className="text-gray-300 hover:text-white transition-colors duration-300 bg-gradient-to-r from-[#4DD0E1] via-[#64FFDA] to-[#4DD0E1] bg-clip-text hover:text-transparent bg-size-200 hover:animate-gradient font-bold">
                {item.name}
              </span>
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#4DD0E1]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#64FFDA]/10 rounded-full blur-3xl animate-float-delay"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-[#4DD0E1]/30 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#64FFDA]/20 rotate-45 animate-bounce-slow"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping delay-700"></div>
          
          {/* Animated lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-scan"></div>
            <div className="absolute left-[80%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-scan delay-1000"></div>
          </div>
        </div>

        <header id="home" className="py-16 relative animate-bounce-in-left">
          <div className="max-w-4xl mx-auto flex items-center gap-8">
            {/* Image container with interactive effects */}
            <div className="relative group animate-scale-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] rounded-lg blur-lg opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:scale-105"></div>
              <img 
                src="/portfpic1.webp" 
                alt="Profile" 
                className="relative w-72 h-auto object-cover rounded-lg shadow-xl hover:scale-[1.02] transition-all duration-300 group-hover:shadow-2xl shadow-purple-500/20" 
              />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#4DD0E1] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#64FFDA] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
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

              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#4DD0E1] via-[#64FFDA] to-[#4DD0E1] bg-clip-text text-transparent bg-size-200 animate-gradient">
                Hi, I'm Daksha!
              </h1>
              <p className="text-lg text-gray-400 hover:text-gray-300 transition-colors duration-300">
                A creative software engineer with a passion for innovation,
                specializing in building robust, scalable applications.
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto py-8 fade-in">
          {/* Experience Section Title */}
          <section id="experience" className="mb-24 animate-bounce-in-left">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-8">
              {/* First Experience */}
              <div className="bg-[#0D1117]/50 rounded-xl p-8 hover:bg-[#0D1117]/80 transition-all duration-300 border border-[#30363D]/50 hover:border-[#30363D] group animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-gray-400">2025</span>
                  <div className="text-right">
                    <h3 className="text-[#4DD0E1] text-xl font-semibold group-hover:text-[#64FFDA] transition-colors duration-300">
                      Software Engineer Intern · SuperWorld
                    </h3>
                    <p className="text-gray-400 text-sm">Sunnyvale, California</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                Engineered a seamless AR experience sharing feature using the React Native Share API, enabling smooth P2P content sharing. Additionally, built a React Native test device manager integrated with Firebase Firestore, streamlining QA workflows by allowing quick device switching and improving testing efficiency.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['React Native Share API', 'QA', 'Firebase Firestore'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1B2432] text-[#4DD0E1] text-sm rounded-full group-hover:bg-[#1F2937] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* First Experience */}
              <div className="bg-[#0D1117]/50 rounded-xl p-8 hover:bg-[#0D1117]/80 transition-all duration-300 border border-[#30363D]/50 hover:border-[#30363D] group animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-gray-400">2024</span>
                  <div className="text-right">
                    <h3 className="text-[#4DD0E1] text-xl font-semibold group-hover:text-[#64FFDA] transition-colors duration-300">
                      Software Engineer Intern · Kalpavruksha Inc
                    </h3>
                    <p className="text-gray-400 text-sm">Bangalore, India</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Developed a dynamic reporting system that streamlined the process of retrieving, processing, and presenting complex data sets, ensuring a seamless user experience. Architected a scalable microservice system to handle real-time notifications and event-driven communication, enabling efficient handling of high-volume data processing and improved system responsiveness. Refactored outdated API endpoints by redesigning the data querying logic to minimize over-fetching and under-fetching, ensuring precise and efficient client-server data exchanges. Focused on optimizing backend workflows to improve scalability, maintainability, and overall system performance.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Express.js', 'MongoDB', 'Kafka', 'GraphQL', 'Docker', 'Jenkins', 'Redis'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1B2432] text-[#4DD0E1] text-sm rounded-full group-hover:bg-[#1F2937] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Second Experience */}
              <div className="bg-[#0D1117]/50 rounded-xl p-8 hover:bg-[#0D1117]/80 transition-all duration-300 border border-[#30363D]/50 hover:border-[#30363D] group animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-gray-400">2024</span>
                  <div className="text-right">
                    <h3 className="text-[#4DD0E1] text-xl font-semibold group-hover:text-[#64FFDA] transition-colors duration-300">
                      Event Coordinator · Women in Computing
                    </h3>
                    <p className="text-gray-400 text-sm">Long Beach, California</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Contributed to outreach initiatives by volunteering for K-12 computer science tutoring programs, helping high school students explore technology and programming. Organized and managed volunteer teams for large-scale programming events, ensuring seamless coordination and participant engagement. Hosted guest speaker events featuring industry professionals, fostering opportunities for learning and networking within the community.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Event Planning', 'Team Leadership', 'Community Outreach', 'Education', 'Volunteer Management'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#1B2432] text-[#4DD0E1] text-sm rounded-full group-hover:bg-[#1F2937] transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 animate-bounce-in-left">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="bg-[#0D1117]/50 rounded-xl p-8 hover:bg-[#0D1117]/80 transition-all duration-300 border border-[#30363D]/50 hover:border-[#30363D] group animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image/Preview */}
                <div className="md:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <img 
                    src="/chesspic1.png" 
                    alt="AI Chess Bot Interface" 
                    className="relative rounded-lg w-full h-[300px] object-cover shadow-xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#4DD0E1] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#64FFDA] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4DD0E1] group-hover:text-[#64FFDA] transition-colors duration-300">
                        AI Chess Bot
                      </h3>
                      <a 
                        href="https://ai-chess-bot-dakshas-projects-bfd2c021.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#4DD0E1] hover:text-[#64FFDA] transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-sm text-gray-400">June 2024</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Experience chess like never before with the AI-powered chess companion. 
                      Featuring real-time analysis, instant move suggestions, and an adaptive 
                      learning system that grows with you. Whether you're a beginner or a 
                      seasoned player, elevate your game with professional-grade insights 
                      and lightning-fast responses.
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'Plotly', 'Angular', 'REST API', 'Stockfish'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1B2432] text-[#4DD0E1] text-sm rounded-full group-hover:bg-[#1F2937] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LensMingle Project */}
            <div className="mt-8 bg-[#0D1117]/50 rounded-xl p-8 hover:bg-[#0D1117]/80 transition-all duration-300 border border-[#30363D]/50 hover:border-[#30363D] group animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image/Preview */}
                <div className="md:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <img 
                    src="/Lensminglepic3.png" 
                    alt="LensMingle Interface" 
                    className="relative rounded-lg w-full h-[300px] object-cover shadow-xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#4DD0E1] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#64FFDA] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4DD0E1] group-hover:text-[#64FFDA] transition-colors duration-300">
                        LensMingle
                      </h3>
                      <a 
                        href="https://devpost.com/software/lensmingle-app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#4DD0E1] hover:text-[#64FFDA] transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-sm text-gray-400">April 2024</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Your Gateway to Perfect Photography Partnerships! 
                      Connect with talented photographers or find your ideal clients. A smart recommendation engine pairs you 
                      with the perfect match based on style, budget, and vision. Get ready to transform 
                      the way you connect in the photography world! 
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Python', 'SKLearn', 'XGBoost', 'Flask', 'Websockets', 'Node.js'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1B2432] text-[#4DD0E1] text-sm rounded-full group-hover:bg-[#1F2937] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PharmaTech Project */}
            <div className="mt-8 bg-[#0D1117]/50 rounded-xl p-8 hover:bg-[#0D1117]/80 transition-all duration-300 border border-[#30363D]/50 hover:border-[#30363D] group animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image/Preview */}
                <div className="md:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <img 
                    src="/pharmatech.png" 
                    alt="PharmaTech Interface" 
                    className="relative rounded-lg w-full h-[300px] object-cover shadow-xl"
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#4DD0E1] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#64FFDA] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4DD0E1] group-hover:text-[#64FFDA] transition-colors duration-300">
                        PharmaTech
                      </h3>
                      <span className="text-sm text-gray-400">January 2023</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      A modern pharmacy management solution!
                      Never miss a prescription pickup with this intelligent notification system. Experience seamless 
                      inventory tracking and real-time updates. Stay connected through SMS and email alerts for 
                      exceptional pharmaceutical care.
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {['Twilio API', 'MySQL', 'React', 'Flask', 'Jenkins', 'SendGrid API'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#1B2432] text-[#4DD0E1] text-sm rounded-full group-hover:bg-[#1F2937] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-24 px-4 md:px-8 animate-bounce-in-left">
            <div className="max-w-4xl mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4DD0E1] to-[#64FFDA] bg-clip-text text-transparent">
                Get In Touch
              </h2>
            <div className="bg-[#0D1117]/50 rounded-2xl p-8 md:p-12 hover:bg-[#0D1117]/70 transition-all duration-300 border border-2 border-[#30363D]/50 hover:border-[#4DD0E1]/50 shadow-xl hover:shadow-2xl group animate-fade-in">
              <div className="flex flex-col items-center space-y-6"></div>
                <p className="text-gray-300 text-lg text-center max-w-xl mx-auto mb-6">
                  I'm always open to exciting opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>

              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/daksha-arvind-4260bb221/" 
                  className="text-[#4DD0E1] hover:text-[#64FFDA] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Dakshaarvind" 
                  className="text-[#4DD0E1] hover:text-[#64FFDA] transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:dakshabarvind@gmail.com" 
                  className="flex items-center gap-2 text-[#4DD0E1] hover:text-[#64FFDA] transition-colors duration-300 text-lg font-semibold"
                >
                  <svg 
                    className="w-7 h-7"
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 4c-.825 0-1.487.672-1.487 1.5L1.5 18.5c0 .825.672 1.5 1.5 1.5h18c.825 0 1.5-.675 1.5-1.5V5.5c0-.828-.675-1.5-1.5-1.5H3zm0 2h18v.5l-9 5.625L3 6.5V6zm0 2.334 6.96 4.416a2.248 2.248 0 0 0 2.08 0L21 8.334V18H3V8.334z"/>
                  </svg>
                  </a>
              </div>

            </div>
          </section>
        </main>

        <footer className="bg-[#0D1117] py-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Daksha Arvind. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioWebsite;