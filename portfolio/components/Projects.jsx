import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "Chat-connect",
      description: "A real-time chat application with instant messaging. Features include JWT authentication, private rooms, and a responsive MERN interface.",
      github_frontend: "https://github.com/Aliv7124/chat",
      github_backend: "https://github.com/Aliv7124/chat-b",
      demo: "https://chat-nln7.vercel.app"
    },
    {
      title: "Lost & Found",
      description: "A community web app to report and claim lost items. Integrated with image uploads and efficient search functionality.",
      github_frontend: "https://github.com/Aliv7124/project",
      github_backend: "https://github.com/Aliv7124/project-backend",
      demo: "https://project-omega-ruddy.vercel.app/login"
    },
    {
      title: "Optical Store",
      description: "A full-stack premium retail website for eyewear built using the MERN stack with a focus on product cataloging.",
      github_frontend: "https://github.com/Aliv7124/optic-frontend",
      github_backend: "https://github.com/Aliv7124/optic-backend",
      demo: "https://msoptical.vercel.app/"
    },
    {
      title: "Dictionary App",
      description: "A sleek dictionary web app utilizing external APIs to provide instant word definitions and phonetics.",
      github_frontend: "https://github.com/Aliv7124/Dictionary",
      demo: "https://Aliv7124.github.io/Dictionary"
    },
    {
      title: "NewsHunt",
      description: "A dynamic news aggregator fetching the latest global headlines across various categories using News API.",
      github_frontend: "https://github.com/Aliv7124/newshunt",
      github_backend: "https://github.com/Aliv7124/newshunt-backend",
      demo: "https://Aliv7124.github.io/newshunt"
    },
    {
      title: "iNotebook",
      description: "Secure cloud-based note-taking app with full CRUD capabilities and user-specific data encryption.",
      github_frontend: "https://github.com/Aliv7124/frontend",
      github_backend: "https://github.com/Aliv7124/inotebook-backend",
      demo: "https://Aliv7124.github.io/frontend"
    },
    {
      title: "BookStore",
      description: "An e-commerce book platform featuring a digital library, cart management, and user authentication.",
      github_frontend: "https://github.com/Aliv7124/book-frontend",
      github_backend: "https://github.com/Aliv7124/Book",
      demo: "https://Aliv7124.github.io/book-frontend"
    }
  ];

  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="projects-title mb-5 text-center">Featured Works</h2>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card-premium" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-status-dot"></div>
                </div>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-links mt-auto">
                  <a href={project.github_frontend} target="_blank" rel="noopener noreferrer" className="proj-btn github">
                    Frontend
                  </a>
                  {project.github_backend && (
                    <a href={project.github_backend} target="_blank" rel="noopener noreferrer" className="proj-btn github">
                      Backend
                    </a>
                  )}
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="proj-btn demo">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background: #050505;
          min-height: 100vh;
          padding-top: 100px;
          padding-bottom: 80px;
          color: #fff;
          position: relative;
        }

        /* Signature Shimmer Title */
        .projects-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -1.5px;
          background: linear-gradient(to right, #ffffff 20%, #48a238 40%, #2575fc 60%, #7e971b 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: revealText 1.2s ease forwards, shimmer 4s linear infinite;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card-premium {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          opacity: 0;
          transform: translateY(30px);
          animation: revealText 0.8s ease forwards;
        }

        /* Staggered Delay */
        .project-card-premium:nth-child(1) { animation-delay: 0.1s; }
        .project-card-premium:nth-child(2) { animation-delay: 0.2s; }
        .project-card-premium:nth-child(3) { animation-delay: 0.3s; }

        .project-card-premium:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #6a11cb;
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .project-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }

        .project-status-dot {
          width: 8px; height: 8px;
          background: #00ffd5;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ffd5;
        }

        .project-desc {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .project-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .proj-btn {
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .github {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .demo {
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          color: #fff;
        }

        .proj-btn:hover {
          transform: scale(1.05);
          color: #fff;
          box-shadow: 0 5px 15px rgba(106, 17, 203, 0.3);
        }

        @keyframes revealText {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        @media (max-width: 768px) {
          .projects-title { font-size: 2.5rem; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export default Projects;