import React from "react";
import "./Home.css";
 // reuse existing styles

const Footer = ({ goToTechnology, goToAbout, goToContact }) => {
  return (
    <footer className="footer dark">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <h3>Discover</h3>
            <ul>
              <li onClick={goToAbout}>About</li>
              <li onClick={() => goToTechnology(null)}>Technologies</li>
              <li onClick={goToContact}>Contact Us</li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Learn</h3>
            <ul>
              <li onClick={() => goToTechnology("cyber")}>Cyber Security</li>
              <li onClick={() => goToTechnology("web")}>Web Development</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with ❤️ by LearnSphere AI Team</p>
          <p>© 2025 LearnSphere Inc. | Terms | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
