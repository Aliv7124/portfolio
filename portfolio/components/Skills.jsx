import React from 'react';

function Skills() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 fs-1">Skills</h2>

      <ul className="list-group list-group-flush fs-5">
        <li className="list-group-item">
          <strong>Programming:</strong> C, Python
        </li>
        <li className="list-group-item">
          <strong>Frontend:</strong> HTML, CSS, JavaScript, React
        </li>
        <li className="list-group-item">
          <strong>Backend:</strong> Node.js, MySQL, Express, MongoDB
        </li>
        <li className="list-group-item">
          <strong>Tools:</strong> Git, GitHub, VS Code
        </li>
      </ul>
    </div>
  );
}

export default Skills;

