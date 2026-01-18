import React from 'react'

function Education() {
  return (
    <section className="education-section py-5">
      <div className="container">
        {/* Animated Title */}
        <h2 className="edu-title mb-5 text-center">Academic Journey</h2>

        <div className="edu-cards-grid">

          {/* B.Tech */}
          <div className="edu-card-premium">
            <div className="glow-on-hover"></div>
            <div className="card-content">
              <div className="edu-tag">Undergraduate</div>
              <h4>B.Tech in Computer Science and Engineering</h4>
              <p className="college-name">Brainware University (Barasat)</p>
              <div className="edu-footer">
                <span className="duration">2022–2026</span>
                <span className="grade">Score: 81.7%</span>
              </div>
            </div>
          </div>

          {/* Diploma */}
          <div className="edu-card-premium">
            <div className="glow-on-hover"></div>
            <div className="card-content">
              <div className="edu-tag">Technical Diploma</div>
              <h4>Diploma in Computer Science and Technology</h4>
              <p className="college-name">Calcutta Technical School (CTS)</p>
              <div className="edu-footer">
                <span className="duration">2023 Graduated</span>
                <span className="grade">Score: 78.3%</span>
              </div>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="edu-card-premium">
            <div className="glow-on-hover"></div>
            <div className="card-content">
              <div className="edu-tag">High School</div>
              <h4>Higher Secondary (Class XII)</h4>
              <p className="college-name">Madhyamgram High School</p>
              <div className="edu-footer">
                <span className="duration">2021 Passed</span>
                <span className="grade">Score: 81.7%</span>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="edu-card-premium">
            <div className="glow-on-hover"></div>
            <div className="card-content">
              <div className="edu-tag">Secondary</div>
              <h4>Secondary Education (Class X)</h4>
              <p className="college-name">Madhyamgram High School</p>
              <div className="edu-footer">
                <span className="duration">2019 Passed</span>
                <span className="grade">Score: 76.8%</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .education-section {
          background: #080808; 
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: #e0e0e0;
          overflow: hidden;
          position: relative;
        }

        /* --- Title Shimmer & Reveal Animation --- */
        .edu-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -1.5px;
          background: linear-gradient(
            to right, 
            #ffffff 20%, 
            #6a11cb 40%, 
            #2575fc 60%, 
            #ffffff 80%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0;
          transform: translateY(30px);
          animation: 
            revealText 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards, 
            shimmer 3s linear infinite;
        }

        /* --- Grid & Cards --- */
        .edu-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          width: 100%;
        }

        .edu-card-premium {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 28px;
          padding: 35px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          animation: 
            revealText 1s cubic-bezier(0.19, 1, 0.22, 1) forwards, 
            idleFloat 6s ease-in-out infinite;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Staggered load delays */
        .edu-card-premium:nth-child(1) { animation-delay: 0.1s, 0s; }
        .edu-card-premium:nth-child(2) { animation-delay: 0.2s, 1s; }
        .edu-card-premium:nth-child(3) { animation-delay: 0.3s, 2s; }
        .edu-card-premium:nth-child(4) { animation-delay: 0.4s, 3s; }

        .edu-card-premium:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #6a11cb;
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(106, 17, 203, 0.2);
        }

        /* --- Tags & Text --- */
        .edu-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #6a11cb;
          font-weight: 800;
          margin-bottom: 15px;
          display: inline-block;
          border-bottom: 1px solid rgba(106, 17, 203, 0.3);
        }

        .edu-card-premium h4 {
          font-size: 1.4rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .college-name {
          color: #999;
          font-size: 1rem;
          margin-bottom: 30px;
        }

        .edu-footer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
        }

        .duration { color: #555; font-size: 0.85rem; }
        .grade { 
          color: #00ffd5; 
          font-weight: 700; 
          font-size: 0.9rem;
          text-shadow: 0 0 10px rgba(0, 255, 213, 0.3);
        }

        /* --- Keyframes --- */
        @keyframes revealText {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        @keyframes idleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* --- Mobile Responsiveness --- */
        @media (max-width: 768px) {
          .edu-title { font-size: 2.6rem; letter-spacing: -1px; }
          .edu-cards-grid { grid-template-columns: 1fr; }
          .edu-card-premium { 
            padding: 25px; 
            animation: revealText 1s forwards; /* Disable float for mobile scroll stability */
          }
        }
      `}</style>
    </section>
  )
}

export default Education;