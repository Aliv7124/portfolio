import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "Amazon Clone (Frontend)",
      description: "Amazon landing page clone using only HTML and CSS.",
      github: "https://github.com/Aliv7124/amazon-clone",
      demo: "https://Aliv7124.github.io/amazon-clone"
    },
    {
      title: "NewsHunt (Frontend)",
      description: "News app built with React fetching latest headlines via API.",
      github: "https://github.com/Aliv7124/newshunt",
      demo: "https://Aliv7124.github.io/newshunt"
    },
    {
      title: "TextUtils",
      description: "A text utility tool in React to analyze and modify text easily.",
      github: "https://github.com/Aliv7124/TextUtils",
      demo: "https://Aliv7124.github.io/TextUtils"
    },
    {
      title: "iNotebook (Fullstack)",
      description: "A secure full-stack note-taking app with login and CRUD using MongoDB, Express, React, Node.js.",
      github: "https://github.com/Aliv7124/frontend",
      demo: "https://Aliv7124.github.io/frontend"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Bootstrap.",
      github: "https://github.com/Aliv7124/portfolio",
      demo: "https://Aliv7124.github.io/portfolio"
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fs-1">Projects</h2>

      {projectList.map((project, index) => (
        <div className="list-group-item mb-4" key={index}>
          <h5 className="mb-2">{project.title}</h5>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary me-2">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">
            Live Demo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
