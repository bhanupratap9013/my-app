import React, { useState } from 'react';

export default function About() {

  return (
    <div className='dark-mode cover-full'>
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img src="https://via.placeholder.com/500" alt="About Image" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h2>About Us</h2>
              <p className="lead">We are a team of passionate individuals committed to excellence.</p>
              <p>
                Our mission is to provide innovative solutions that make a difference in people's lives. With years of experience and a dedicated team, we ensure that every project is carried out with precision and care.
              </p>
              <p>
                We believe in continuous improvement and strive to exceed expectations at every step. Let us help you achieve your goals and bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
