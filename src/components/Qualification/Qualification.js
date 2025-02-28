import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [activeQualification, setActiveQualification] = useState(1);

  const handleQualification = (id) => {
    setActiveQualification(id);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              activeQualification === 1 ? "qualification__active" : ""
            }`}
            onClick={() => handleQualification(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              activeQualification === 2 ? "qualification__active" : ""
            }`}
            onClick={() => handleQualification(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeQualification === 1 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Masters in Computer Science</h3>
                <span className="qualification__subtitle">
                Northern Illinois University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data qualification__data-right">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Undergraduate</h3>
                <span className="qualification__subtitle">
                VIGNAN NIRULA INSTITUTE OF TECHNOLOGY AND SCIENCE FOR WOMEN
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2016 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              activeQualification === 2 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data qualification__data-right">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Teaching Assistant</h3>
                <span className="qualification__subtitle">NORTHERN ILLINOIS UNIVERSITY</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2024 - Present
                </div>
              <div class="qualification__data__theory">
              <ol>
              <li>Guided students through difficult concepts, ensuring they felt confident in their learning.</li>
              <li>Held additional sessions to help students grasp the material and resolve questions.</li>
              <li>Instructed on Database topics, simplifying complex theories for better student understanding.</li>
              <li>Built strong relationships with students, earning recognition for clear and supportive teaching.</li>
              </ol>
              </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack .NET  Developer</h3>
                <span className="qualification__subtitle">TATA CONSULTANCY SERVICES</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2021 - 2023
                </div>
                <div class="qualification__data__theory" >
                <ol>
    <li>Developed web pages and backend systems using VB.NET and C#, ensuring scalability and reliability.</li>
    <li>Designed and implemented CI/CD pipelines with Azure DevOps, reducing deployment times by 30%.</li>
    <li>Built and maintained APIs (REST & SOAP) using .NET Core; utilized Azure API Gateway for secure API management.</li>
    <li>Delivered interactive front-end components with React.js, HTML, CSS, and JavaScript, achieving a 95% customer satisfaction rate.</li>
  </ol>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
