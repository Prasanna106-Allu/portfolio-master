/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* <a
        href="https:/instagram.com/ahad.x.ali"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a> */}
      <a
        href="https://github.com/Prasanna106-Allu"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/prasannalakshmiallu/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
