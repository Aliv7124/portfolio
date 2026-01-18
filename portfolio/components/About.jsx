import React from 'react'
import CV from '../src/assets/CV.jpeg'
import CVPDF from '../src/assets/ALIV_ROY_CV (2) (1).pdf'

function About() {
  const styleSheet = `
    /* 1. Page Reveal - Smooth Fade and Blur removal */
    @keyframes pageReveal {
      from { opacity: 0; filter: blur(10px); transform: translateY(20px); }
      to { opacity: 1; filter: blur(0px); transform: translateY(0); }
    }

    /* 2. Shimmer Effect for the Title */
    @keyframes shimmerReveal {
      to { background-position: 200% center; }
    }

    /* 3. Floating Animation for Image */
    @keyframes liquidFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }

    /* 4. Subtle pulse for the neon ring */
    @keyframes ringPulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }

    .about-section {
      animation: pageReveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    }

    .about-title-premium {
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: -2px;
      background: linear-gradient(90deg, #fff, #409042, #2575fc, #c5bc3d);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmerReveal 4s linear infinite;
    }

    .premium-span {
      color: #fff;
      font-weight: 600;
      position: relative;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .premium-span::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 0%;
      height: 1px;
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      box-shadow: 0 0 8px #6a11cb;
      transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .premium-span:hover::after {
      width: 100%;
    }

    .premium-span:hover {
      text-shadow: 0 0 10px rgba(106, 17, 203, 0.5);
    }

    @media (max-width: 768px) {
      .about-title-premium { font-size: 2.8rem; }
      .profile-img-responsive { width: 200px !important; height: 200px !important; }
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <div
        className="container-fluid py-5 d-flex align-items-center justify-content-center about-section"
        style={{
          minHeight: '100vh',
          backgroundColor: '#050505',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Mesh */}
        <div style={{
          position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(106, 17, 203, 0.12) 0%, transparent 70%)',
          zIndex: 0
        }}></div>

        <div 
          className="container p-4 p-md-5"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '40px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <div className="row align-items-center">
            
            {/* Image Column */}
            <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center mb-5 mb-lg-0">
              <div style={{ position: 'relative', animation: 'liquidFloat 6s ease-in-out infinite' }}>
                {/* Neon Ring Animation */}
                <div style={{
                  position: 'absolute', inset: '-12px', padding: '2px',
                  background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                  borderRadius: '50%', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out', maskComposite: 'exclude',
                  animation: 'ringPulse 4s ease-in-out infinite'
                }}></div>
                
                <img
                  src={CV}
                  alt="Aliv Roy"
                  className="img-fluid rounded-circle profile-img-responsive"
                  style={{
                    width: '300px', height: '300px', objectFit: 'cover',
                    border: '8px solid rgba(255,255,255,0.03)',
                    transition: 'all 0.5s ease'
                  }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
              <h2 className="about-title-premium mb-4">About Me</h2>
              
              <div className="fs-5 lh-lg text-white-80" style={{ fontWeight: '300', color: 'rgba(255,255,255,0.7)' }}>
                <p>
                  Hi, I’m <span className="premium-span">Aliv Roy</span>, a <span className="premium-span">Full-Stack MERN Developer</span> from <span className="premium-span">Madhyamgram</span>. 
                  I’m currently pursuing <span className="premium-span">B.Tech in CSE</span> with specialization in <span className="premium-span">AI & Machine Learning</span>.
                </p>

                <p>
                  I specialize in building <span className="premium-span">end-to-end web applications</span> using <span className="premium-span">MongoDB, Express, React, and Node.js</span>.
                </p>

                <p>
                  I work with <span className="premium-span">modern UI/UX</span>, REST APIs, <span className="premium-span">JWT authentication</span>, and scalable backend architectures.
                </p>

                <p className="mb-5">
                  Passionate about <span className="premium-span">clean code</span> and continuous learning, I aim to create impactful solutions.
                </p>
              </div>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <a
                  href={CVPDF}
                  download="Aliv_Roy_CV.pdf"
                  className="btn btn-lg px-5 py-3 fw-bold shadow-lg text-white"
                  style={{
                    background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
                    border: 'none', borderRadius: '15px', transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    letterSpacing: '1px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(106, 17, 203, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Download CV
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;