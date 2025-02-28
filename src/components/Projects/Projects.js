/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Modern Car Rental Experience",
    description:
      "This website designed to streamline the vehicle rental process for users looking for a convenient and efficient solution.",
    url: "https://github.com/Prasanna106-Allu/RentNDrive",
    category: "frontend",
  },
  {
    id: 2,
    title: "eCommerce webiste for clothing",
    description:
      "Modern eCommerce website designed for the fashion-forward consumer with a goal was to create a seamless online shopping experience.",
    url: "https://github.com/Prasanna106-Allu/eCommerce_website",
    category: "frontend",
  },
  {
    id: 3,
    title: "Portfolio Webiste",
    description:
      "Portfolio Website is a personal showcase designed to highlight my skills, projects, and professional journey.",
    url: "https://github.com/Prasanna106-Allu/Portfolio",
    category: "frontend",
  },
  
  
];

const Projects = () => {
  const projectsNav = [
    "All",
    // ...new Set(projectsData.map((project) => project.category)),
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    // } else {
    //   setProjects(
    //     projectsData.filter((project) => project.category === item.name)
    //   );
    }
  }, [item]);
  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        <div className="projects__filters">
          {projectsNav.map((navText, index) => {
            return (
              <span
                className={
                  item.name === navText
                    ? "active__filters-item projects__filters-item"
                    : "projects__filters-item"
                }
                key={index}
                onClick={() => setItem({ name: navText })}
              >
                {navText}
              </span>
            );
          })}
        </div>
        <div className="projects__container container grid">
          {projects.map(({ id, title, url, description }) => {
            return (
              <div class="card" key={id}>
                <div class="content">
                  <div class="h6">{title}</div>
                  <p>{description}</p>
                  <a href={url} target="_blank" className="project__button">
                    Git Hub link{" "}
                    <i className="bx bx-right-arrow-alt project__button-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
