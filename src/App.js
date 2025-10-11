import React, { useEffect, useState } from 'react';

const PortfolioWebsite = () => {
  const [sparkles, setSparkles] = useState([]);

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

    // Generate sparkles
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
          size: Math.random() * 8 + 4
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  // Replace scrapbookNotes with your image-based notes and improved positions:
  const scrapbookNotes = [
    {
      img: "/scrapbook-stem.png",
      alt: "STEM Mentor: Inspired girls in STEM",
      style: {
        top: "32px", left: "-120px", // left side, upper
        width: "120px", height: "120px", zIndex: 30,
        animation: "floatScrap0 7s ease-in-out infinite alternate",
      }
    },
    {
      img: "/scrapbook-bmes.png",
      alt: "BMES Webmaster: Built & maintained the Biomedical Engineering Society website.",
      style: {
        top: "50%", left: "-110px", // left side, middle
        width: "110px", height: "110px", zIndex: 30,
        transform: "translateY(-50%)",
        animation: "floatScrap1 8s ease-in-out infinite alternate",
      }
    },
    {
      img: "/scrapbook-creative.png",
      alt: "Creative Coding: Designed interactive art & mini-games for campus events.",
      style: {
        bottom: "32px", right: "-120px", // right side, lower
        width: "120px", height: "120px", zIndex: 30,
        animation: "floatScrap2 6s ease-in-out infinite alternate",
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 text-gray-800 relative overflow-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce-cute {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .float { animation: float 3s ease-in-out infinite; }
        .bounce-cute { animation: bounce-cute 2s ease-in-out infinite; }
        .wiggle { animation: wiggle 1s ease-in-out infinite; }
        .sparkle { animation: sparkle 2s ease-in-out infinite; }
        .heart-beat { animation: heart-beat 1.5s ease-in-out infinite; }
        .rainbow-bg { 
          background: linear-gradient(-45deg, #ff9a9e, #fecfef, #fecfef, #ff9a9e);
          background-size: 400% 400%;
          animation: rainbow 4s ease infinite;
        }
        
        .hover-bounce:hover {
          animation: bounce-cute 0.6s ease-in-out;
        }
      `}</style>

      {/* Floating sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        >
          <div 
            className="sparkle text-pink-400"
            style={{ fontSize: `${sparkle.size}px` }}
          >
            ✨
          </div>
        </div>
      ))}

      {/* Cute floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl float text-pink-300">🌸</div>
        <div className="absolute top-40 right-20 text-4xl bounce-cute text-purple-300">🌸</div>
        <div className="absolute bottom-20 left-20 text-5xl wiggle text-pink-400">🦋</div>
        <div className="absolute bottom-40 right-10 text-3xl float text-purple-400">⭐</div>
        <div className="absolute top-2/3 right-1/4 text-4xl bounce-cute text-purple-500">🌙</div>
        
        
        {/* Floating hearts */}
        <div className="absolute top-10 right-1/3 text-pink-400 animate-pulse">💗</div>
        <div className="absolute bottom-10 left-1/3 text-purple-400 animate-bounce">💜</div>
      </div>

      {/* Navigation with cute styling */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-lg z-50 rounded-full px-8 py-3 border-2 border-pink-200 shadow-lg shadow-pink-200/50">
        <div className="flex items-center gap-8">
          {[
            { name: '🏠 Home', href: '#home' },
            { name: '💼 Experience', href: '#experience' },
            { name: '🎨 Projects', href: '#projects' },
            { name: '💌 Contact', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group py-2 px-4 rounded-full hover:bg-pink-100 transition-all duration-300 hover-bounce"
            >
              <span className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-semibold">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <header id="home" className="py-16 relative">
          <div className="max-w-4xl mx-auto flex items-center gap-8 px-4">
            {/* Profile Image with cute effects */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="/Screenshot 2025-05-29 160937.png" 
                  alt="Profile" 
                  className="relative w-72 h-72 object-cover rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-all duration-300 float" 
                />
                {/* Cute decorative elements around image */}
                <div className="absolute -top-4 -right-4 text-3xl bounce-cute">🌟</div>
                <div className="absolute -bottom-4 -left-4 text-2xl wiggle">🌸</div>
              </div>
            </div>

            <div className="text-left">
              {/* Cute animated greeting */}
              <div className="flex items-center gap-2 mb-6">
                
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>

              <h1 className="text-5xl font-bold mb-4 text-pink-500">
                Hi, I'm Daksha! ✨
              </h1>
              <p className="text-lg text-gray-600">
                I craft engaging digital experiences that blend creativity with clean, functional code.
                I'm constantly learning & building with a focus on impact, design, and security.🌟
              </p>
              
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto py-8 px-4">
          {/* Experience Section */}
          <section id="experience" className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-pink-500">
                My Experience 💼
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* Software Engineer Intern · Fetch.ai Experience (moved to top) */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-purple-200 hover:border-purple-300 group hover:shadow-xl hover:shadow-purple-200/50 hover-bounce">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <div className="text-right">
                    <h3 className="text-purple-600 text-xl font-bold group-hover:text-pink-600 transition-colors duration-300">
                      Software Engineer Intern · Fetch.ai
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span>📍</span>   San Francisco, USA
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Building AI Agents to help fulfill marketing & content creation needs for small businesses.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI Agents', 'LangGraph'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-pink-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Beach Media Experience */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 group hover:shadow-xl hover:shadow-pink-200/50 hover-bounce">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-600 font-semibold bg-pink-100 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <div classNmae="text-left">
                    <h3 className="text-pink-600 text-xl font-bold group-hover:text-purple-600 transition-colors duration-300 text-left">
                      Software Engineer Intern · Beach Media 🌊
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1 text-left">
                      <span>📍</span> Long Beach, California
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Developed a style-aware ad-placement engine using React and the Google Ad Manager API, enabling real-time CSS analysis to dynamically match ad creatives with the visual design of each page. This approach preserved site performance and improved the overall aesthetic cohesion of ad placements. Additionally, collaborated closely with cross-functional teams, including marketing, events, and brand partnerships to communicate technical concepts clearly, align on shared goals, and support the success of advertising initiatives.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Lighthouse audits', 'Frontend architecture', 'DOM / CSS parsing', 'Web performance optimization', 'Programmatic advertising'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
              
              {/* Kalpavruksha Experience */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-purple-200 hover:border-purple-300 group hover:shadow-xl hover:shadow-purple-200/50 hover-bounce">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">2024</span>
                  </div>
                  <div className="text-right">
                    <h3 className="text-purple-600 text-xl font-bold group-hover:text-pink-600 transition-colors duration-300">
                      Software Engineer Intern · Kalpavruksha Inc 💻
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span>📍</span> Bangalore, India
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Developed a dynamic reporting system that streamlined the process of retrieving, processing, and presenting complex data sets, ensuring a seamless user experience. Architected a scalable microservice system to handle real-time notifications and event-driven communication, enabling efficient handling of high-volume data processing and improved system responsiveness. Refactored outdated API endpoints by redesigning the data querying logic to minimize over-fetching and under-fetching, ensuring precise and efficient client-server data exchanges. Focused on optimizing backend workflows to improve scalability, maintainability, and overall system performance. 📈
                </p>

                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Express.js', 'MongoDB', 'Kafka', 'GraphQL', 'Docker', 'Jenkins', 'Redis'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* President · Women in Computing Experience */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 group hover:shadow-xl hover:shadow-pink-200/50 hover-bounce">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-pink-600 font-semibold bg-pink-100 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <div className="text-right">
                    <h3 className="text-pink-600 text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">
                      President · Women in Computing 🌟
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span>📍</span> Long Beach, California
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  - Led a multidisciplinary executive board and oversaw all club operations, initiatives, and events promoting inclusivity and representation in tech.
                  <br />
                  - Organized and directed WiC’s annual hackathon, managing logistics, sponsorships, volunteer coordination, and technical committee programs.
                  <br />
                  - Fostered partnerships with tech companies, startups, and university departments to provide members with mentorship, internships, and learning opportunities.
                  <br />
                  - Took initiative in launching new programs that encouraged student engagement, leadership development, and collaboration across computing-related organizations.
                </p>
              </div>

              {/* Women in Computing Experience */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 group hover:shadow-xl hover:shadow-pink-200/50 hover-bounce">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    
                    <span className="text-pink-600 font-semibold bg-pink-100 px-3 py-1 rounded-full">2024</span>
                  </div>
                  <div className="text-right">
                    <h3 className="text-pink-600 text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">
                      Event Coordinator · Women in Computing 🌟
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                      <span>📍</span> Long Beach, California
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Contributed to outreach initiatives by volunteering for K-12 computer science tutoring programs, helping high school students explore technology and programming. Organized and managed volunteer teams for large-scale programming events, ensuring seamless coordination and participant engagement. Hosted guest speaker events featuring industry professionals, fostering opportunities for learning and networking within the community.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Event Planning', 'Team Leadership', 'Community Outreach', 'Education', 'Volunteer Management'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-pink-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fetch.ai Experience removed */}
            </div>

            <div className="relative">
              {/* Scrapbook floating images - desktop only */}
              {scrapbookNotes.map((note, i) => (
                <img
                  key={i}
                  src="/Web_Master.png"
                  alt="BMES"
                  className="hidden md:block absolute scrapbook-img pointer-events-none select-none"
                  style={note.style}
                  draggable={false}
                />
              ))}
              {/* ...the rest of experience cards... */}
              <style jsx>{`
                @keyframes floatScrap0 {
                  0% { transform: translateY(0);}
                  100% { transform: translateY(-18px);}
                }
                @keyframes floatScrap1 {
                  0% { transform: translateY(-50%) scale(1);}
                  100% { transform: translateY(-60%) scale(1.05);}
                }
                @keyframes floatScrap2 {
                  0% { transform: translateY(0);}
                  100% { transform: translateY(16px);}
                }
                .scrapbook-img {
                  filter: drop-shadow(0 4px 16px #f9a8d4cc);
                  transition: filter 0.3s;
                  user-select: none;
                }
                .scrapbook-img:hover {
                  filter: drop-shadow(0 8px 32px #a78bfaee) brightness(1.1);
                }
                @media (max-width: 1024px) {
                  .scrapbook-img {
                    display: none !important;
                  }
                }
              `}</style>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-pink-500">
                Projects 🎨
              </h2>
            </div>
            
            {/* StartNOW */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 group hover:shadow-xl hover:shadow-pink-200/50 mb-8 hover-bounce">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  <img 
                    src="/Screenshot 2025-05-25 215311.png" 
                    alt="StartNOW Interface" 
                    className="relative rounded-2xl w-full h-[300px] object-cover shadow-lg border-2 border-white"
                  />
                  <div className="absolute -top-3 -right-3 text-3xl bounce-cute">🌱</div>
                  <div className="absolute -bottom-3 -left-3 text-2xl wiggle">📊</div>
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-pink-600 group-hover:text-purple-600 transition-colors duration-300">
                        StartNOW 💡
                      </h3>
                      <a 
                        href="https://devpost.com/software/startnow" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pink-500 hover:text-purple-500 transition-colors duration-300 hover-bounce"
                      >
                        <span className="text-2xl">🔗</span>
                      </a>
                      <span className="text-sm text-gray-600 bg-pink-100 px-3 py-1 rounded-full">
                        April 2025
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Pitch your startup idea and watch your agentic board brainstorm. Featuring the Unpaid Intern, CTO, etc… all working hard to give you infinite possibilities on what steps to take next! Be it Buisness plans, pitch decks for investors or marketing strategies, watch this product build it all for you.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Uagents', 'AgentVerse', 'Hackathon WINNER'].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Chess Bot */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 group hover:shadow-xl hover:shadow-pink-200/50 mb-8 hover-bounce">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  <img 
                    src="/chesspic1.png" 
                    alt="AI Chess Bot Interface" 
                    className="relative rounded-2xl w-full h-[300px] object-cover shadow-lg border-2 border-white"
                  />
                  <div className="absolute -top-3 -right-3 text-3xl bounce-cute">♟️</div>
                  <div className="absolute -bottom-3 -left-3 text-2xl wiggle">🧠</div>
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-pink-600 group-hover:text-purple-600 transition-colors duration-300">
                        AI Chess Bot ♟️
                      </h3>
                      <a 
                        href="https://ai-chess-bot-dakshas-projects-bfd2c021.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pink-500 hover:text-purple-500 transition-colors duration-300 hover-bounce"
                      >
                        <span className="text-2xl">🔗</span>
                      </a>
                      <span className="text-sm text-gray-600 bg-pink-100 px-3 py-1 rounded-full">
                        June 2024 
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Experience chess like never before with the AI-powered chess companion. 
                      Featuring real-time analysis, instant move suggestions, and an adaptive 
                      learning system that grows with you. Whether you're a beginner or a 
                      seasoned player, elevate your game with professional-grade insights 
                      and lightning-fast responses. 🏆
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'Plotly', 'Angular', 'REST API', 'Stockfish'].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
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
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-purple-200 hover:border-purple-300 group hover:shadow-xl hover:shadow-purple-200/50 mb-8 hover-bounce">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  <img 
                    src="/Lensminglepic3.png" 
                    alt="LensMingle Interface" 
                    className="relative rounded-2xl w-full h-[300px] object-cover shadow-lg border-2 border-white"
                  />
                  <div className="absolute -top-3 -right-3 text-3xl bounce-cute">📸</div>
                  <div className="absolute -bottom-3 -left-3 text-2xl wiggle">👩‍💻</div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-purple-600 group-hover:text-pink-600 transition-colors duration-300">
                        LensMingle 📷
                      </h3>
                      <a 
                        href="https://devpost.com/software/lensmingle-app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-purple-500 hover:text-pink-500 transition-colors duration-300 hover-bounce"
                      >
                        <span className="text-2xl">🔗</span>
                      </a>
                      <span className="text-sm text-gray-600 bg-purple-100 px-3 py-1 rounded-full">
                        April 2024 
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Your Gateway to Perfect Photography Partnerships!
                      Connect talented photographers with ideal clients using smart recommendations  and match based on style, budget, and vision!
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['React', 'Python', 'SKLearn', 'XGBoost', 'Flask', 'Websockets', 'Node.js'].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
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
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-300 border-2 border-pink-200 hover:border-pink-300 group hover:shadow-xl hover:shadow-pink-200/50 hover-bounce">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  <img 
                    src="/pharmatech.png" 
                    alt="PharmaTech Interface" 
                    className="relative rounded-2xl w-full h-[300px] object-cover shadow-lg border-2 border-white"
                  />
                  <div className="absolute -top-3 -right-3 text-3xl bounce-cute">💊</div>
                  <div className="absolute -bottom-3 -left-3 text-2xl wiggle">🏥</div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-pink-600 group-hover:text-purple-600 transition-colors duration-300">
                        PharmaTech 💊
                      </h3>
                      <span className="text-sm text-gray-600 bg-pink-100 px-3 py-1 rounded-full">
                        January 2023 
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      A modern pharmacy management solution! 
                      Never miss a prescription with intelligent notifications and seamless inventory tracking with real-time updates⚡
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['Twilio API', 'MySQL', 'React', 'Flask', 'Jenkins', 'SendGrid API'].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full hover:shadow-md transition-all duration-300 hover-bounce"
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
              <h2 className="text-3xl font-bold mb-4 text-pink-500">
                Get In Touch
              </h2>
            <div className="bg-white/80 rounded-2xl p-8 md:p-12 hover:bg-pink-50 transition-all duration-300 border border-2 border-pink-200 hover:border-pink-400 shadow-xl hover:shadow-2xl group animate-fade-in">
              <div className="flex flex-col items-center space-y-6"></div>
                <p className="text-pink-500 font-bold text-lg text-center max-w-xl mx-auto mb-6">
                  I'm always open to exciting opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>

              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/daksha-arvind-4260bb221/" 
                  className="text-pink-500 hover:text-purple-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Dakshaarvind" 
                  className="text-pink-500 hover:text-purple-600 transition-colors duration-300"
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
                  className="flex items-center gap-2 text-pink-500 hover:text-purple-500 transition-colors duration-300 text-lg font-semibold"
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

        <footer className="bg-pink-300 py-4 text-center text-white-800">
          <p>&copy; {new Date().getFullYear()} Daksha Arvind. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioWebsite;