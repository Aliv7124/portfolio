import React from 'react';

function Contact() {
    return (
        <div className="container my-5 py-4 text-light bg-dark rounded">
            <h2 className="mb-4 text-center">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h5>Email:</h5>
                    <p>alivroy25@example.com</p>

                    <h5>Phone:</h5>
                    <p>+91 6290070893</p>

                    <h5>Location:</h5>
                    <p>Madhyamgram, West Bengal, India</p>

                    <h5>Socials:</h5>
                    <a href="https://github.com/Aliv7124" target="_blank" rel="noreferrer" className="me-3 text-info">GitHub</a>
                    <a href="https://linkedin.com/in/https://www.linkedin.com/in/aliv-roy-303317289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-info">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

