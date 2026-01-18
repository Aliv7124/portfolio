import React from 'react';

function Skills() {
  const categories = [
    { title: "Programming", skills: ["C", "Python"] },
    { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Backend", skills: ["Node.js", "Express", "MongoDB"] },
    { title: "Tools", skills: ["Git", "GitHub", "VS Code"] },
    { title: "UI Frameworks", skills: ["Bootstrap", "Tailwind CSS"] }
  ];

  return (
    <section className="skills-section py-5">
      <div className="container">
        <h2 className="skills-title mb-5 text-center">Technical Expertise</h2>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <div className="skill-category-card" key={index}>
              <div className="category-header">
                <span className="dot"></span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: #050505; /* Consistent Midnight Theme */
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: #fff;
          padding-top: 100px;
          padding-bottom: 80px;
          position: relative;
          overflow: hidden;
        }

        /* Title Shimmer - Matching Education & About */
        .skills-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -1.5px;
          background: linear-gradient(
            to right, 
            #ffffff 20%, 
            #3f8f5b 40%, 
            #2575fc 60%, 
            #7fa10d 80%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: 
            revealText 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards, 
            shimmer 3s linear infinite;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .skill-category-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 30px;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          opacity: 0;
          transform: translateY(30px);
          animation: revealText 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        /* Staggered load for cards */
        .skill-category-card:nth-child(1) { animation-delay: 0.1s; }
        .skill-category-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-category-card:nth-child(3) { animation-delay: 0.3s; }
        .skill-category-card:nth-child(4) { animation-delay: 0.4s; }
        .skill-category-card:nth-child(5) { animation-delay: 0.5s; }

        .skill-category-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #6a11cb;
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #6a11cb;
          border-radius: 50%;
          box-shadow: 0 0 10px #6a11cb;
        }

        .category-header h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0;
          color: rgba(255,255,255,0.9);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #00ffd5;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: #6a11cb;
          color: #fff;
          border-color: #6a11cb;
          transform: scale(1.1);
        }

        /* Animations */
        @keyframes revealText {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        @media (max-width: 768px) {
          .skills-title { font-size: 2.6rem; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export default Skills;