import React from 'react';

function Projects() {
  const projectList = [
   
     {
      title: "Chat-connect",
      description: "A real-time chat application that allows users to send and receive messages instantly. Features include user authentication, private chats, and a responsive interface for seamless communication.",
       github_frontend: "https://github.com/Aliv7124/chat",
       github_backend:"https://github.com/Aliv7124/chat-b",
      demo: "https://chat-nln7.vercel.app"
    },
    {
      title: "Lost & Found",
      description: "A web application that helps users report, search, and claim lost items. Users can post lost or found items with details and images, making it easier to reunite belongings with their owners efficiently.",
       github_frontend: "https://github.com/Aliv7124/project",
       github_backend:"https://github.com/Aliv7124/project-backend",
      demo: "https://project-omega-ruddy.vercel.app/login"
    },
    {
     title: "Optical store website",
  description: "Optical store full stack website using MERN",
   github_frontend: "https://github.com/Aliv7124/optic-frontend",
   github_backend: "https://github.com/Aliv7124/optic-backend",
  demo: "https://msoptical.vercel.app/"
},
    {
  title: "Dictionary",
  description: "Dictionary web app using HTML, CSS, and JavaScript.",
   github_frontend: "https://github.com/Aliv7124/Dictionary",
  demo: "https://Aliv7124.github.io/Dictionary"
},

    {
      title: "NewsHunt",
      description: "News app built with React fetching latest headlines via API.",
       github_frontend: "https://github.com/Aliv7124/newshunt",
       github_backend:"https://github.com/Aliv7124/newshunt-backend",
      demo: "https://Aliv7124.github.io/newshunt"
    },
    {
      title: "TextUtils",
      description: "A text utility tool in React to analyze and modify text easily.",
       github_frontend: "https://github.com/Aliv7124/TextUtils",
      demo: "https://Aliv7124.github.io/TextUtils"
    },
    {
      title: "iNotebook",
      description: "A secure full-stack note-taking app with login and CRUD using MongoDB, Express, React, Node.js.",
       github_frontend: "https://github.com/Aliv7124/frontend",
        github_backend:"https://github.com/Aliv7124/inotebook-backend",
      demo: "https://Aliv7124.github.io/frontend"
    },
    {
      title: "BookStore Website",
      description: "A secure full-stack note-taking app with login and CRUD using MongoDB, Express, React, Node.js..",
      github_frontend: "https://github.com/Aliv7124/book-frontend",
       github_backend:"https://github.com/Aliv7124/Book",
      demo: "https://Aliv7124.github.io/book-frontend"
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fs-1">Projects</h2>

      {projectList.map((project, index) => (
        <div className="list-group-item mb-4" key={index}>
          <h5 className="mb-2">{project.title}</h5>
          <p>{project.description}</p>
          <a href={project.github_frontend} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary me-2">
            GitHub Frontend
          </a>
          
{project.github_backend && (
  <a
    href={project.github_backend}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-sm btn-outline-primary me-2"
  >
    GitHub Backend
  </a>
)}

          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">
            Live Demo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
