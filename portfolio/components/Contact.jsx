import React from 'react';

function Contact() {
  const styleSheet = `
    .contact-section {
      background: #050505;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 100px 0;
      color: #fff;
      position: relative;
      overflow: hidden;
    }

    /* Shimmering Title to match other pages */
    .contact-title {
      font-size: 3.5rem;
      font-weight: 800;
      letter-spacing: -1.5px;
      background: linear-gradient(to right, #ffffff 20%, #37a94e 40%, #2575fc 60%, #8fb611 80%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: revealText 1.2s ease forwards, shimmer 3s linear infinite;
    }

    .contact-glass-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 30px;
      padding: 50px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.4);
      animation: revealText 1s ease-out forwards;
    }

    .info-item {
      margin-bottom: 30px;
      transition: transform 0.3s ease;
    }

    .info-item:hover {
      transform: translateX(10px);
    }

    .info-label {
      color: #6a11cb;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 800;
      margin-bottom: 5px;
      display: block;
    }

    .info-value {
      font-size: 1.2rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
    }

    /* Social Link Buttons */
    .social-bar {
      display: flex;
      gap: 15px;
      margin-top: 40px;
    }

    .social-link {
      flex: 1;
      padding: 15px;
      text-align: center;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .social-link:hover {
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(106, 17, 203, 0.3);
      color: #fff;
    }

    @keyframes revealText {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      to { background-position: 200% center; }
    }

    @media (max-width: 768px) {
      .contact-title { font-size: 2.8rem; }
      .contact-glass-card { padding: 30px; }
      .social-bar { flex-direction: column; }
    }
  `;

  return (
    <section className="contact-section">
      <style>{styleSheet}</style>
      <div className="container">
        <h2 className="contact-title text-center mb-5">Get In Touch</h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="contact-glass-card">
              
              <div className="info-item">
                <span className="info-label">Email</span>
                <div className="info-value">alivroy25@gmail.com</div>
              </div>

              <div className="info-item">
                <span className="info-label">Phone</span>
                <div className="info-value">+91 62900 70893</div>
              </div>

              <div className="info-item">
                <span className="info-label">Location</span>
                <div className="info-value">Madhyamgram, West Bengal, India</div>
              </div>

              <div className="social-bar">
                <a href="https://github.com/Aliv7124" target="_blank" rel="noreferrer" className="social-link">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/aliv-roy-303317289" target="_blank" rel="noreferrer" className="social-link">
                  LinkedIn
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;