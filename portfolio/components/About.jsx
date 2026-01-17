import React from 'react'
import CV from '../src/assets/CV.jpeg'
import CVPDF from '../src/assets/ALIV_ROY_CV.pdf' 
function About() {

   return (
    <>
      <div
        className="container py-5 my-5 rounded shadow-lg"
        style={{ background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)' }}
      >
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
            <img
              src={CV}
              alt="Aliv Roy"
              className="img-fluid rounded-circle border border-4 border-primary shadow"
              style={{
                maxHeight: '220px',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Text */}
          <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
            <h2
              className="mb-4"
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </h2>

            <p className="fs-5 mb-3">
              Hi, I'm <strong>Aliv Roy</strong> from <strong>Madhyamgram</strong>. I'm currently pursuing a degree in <strong>Computer Science and Engineering</strong> with a specialization in <strong>Artificial Intelligence and Machine Learning (CSE AI-ML)</strong>.
            </p>
            <p className="fs-5 mb-4">
              I have a strong interest in <strong>web development</strong>, and I enjoy creating responsive and user-friendly websites.
            </p>

            <a
              href={CVPDF}
              download="Aliv_Roy_CV.pdf"
              className="btn btn-primary btn-lg shadow"
              style={{
                background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
                border: 'none',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;