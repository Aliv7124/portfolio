import React from 'react'
import CV from '../src/assets/CV.jpeg'
import CVPDF from '../src/assets/ALIV_ROY_CV.pdf' 
function About() {

  return (
    <>
    <div className="container mt-5">
      <div className="row">
       
        <div className="col-md-6">
          <h2 className="mb-4 fs-1">About Me</h2>
          <p className="fs-5">
            Hi, I'm <strong>Aliv Roy</strong> from <strong>Madhyamgram</strong>. I'm currently pursuing a degree in <strong>Computer Science and Engineering</strong> with a specialization in <strong>Artificial Intelligence and Machine Learning (CSE AI-ML)</strong>.
          </p>
          <p className="fs-5">
            I have a strong interest in <strong>web development</strong>, and I enjoy creating responsive and user-friendly websites.
          </p>
        </div>

       
        <div className="col-md-6 d-flex justify-content-end align-items-start">
              
          <img
            src={CV}
            alt="Aliv Roy"
            className="img-fluid rounded"
            style={{ maxHeight: '200px' }}
          />
        </div>
      </div>
    </div>
    
      <div className="container my-4">
        
 
   <a href={CVPDF} download="Aliv_Roy_CV.pdf" className="btn btn-primary">
   
    Download CV
  </a>
</div>
    </>
  )
}

export default About;
