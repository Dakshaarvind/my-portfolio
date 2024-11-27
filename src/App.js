import React from 'react';

const PortfolioWebsite = () => {
  return (
    <div className="min-h-screen bg-[#1E1B2E] text-white">
      <header className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/api/placeholder/200/200" alt="Profile" className="rounded-full w-48 h-48 mb-6" />
          <h1 className="text-4xl font-bold mb-2">I'm a Software Engineer!</h1>
          <p className="text-lg text-gray-400">
            A passionate software engineer with expertise in building robust, scalable applications.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8">
        <section className="mb-8">
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

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Example Project</h2>
          <div className="bg-[#2E2A47] p-4 rounded-lg shadow-md">
            <img src="/api/placeholder/600/400" alt="Example Project" className="mb-4" />
            <h3 className="text-xl font-bold">Example Project</h3>
            <p>This is an example of a project I've worked on. You can see the details here.</p>
            <button className="bg-[#3F3A5F] text-white px-4 py-2 rounded-lg mt-4">View Project</button>
          </div>
        </section>

        <section>
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
  );
};

export default PortfolioWebsite;