import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://in.linkedin.com/in/sarthak03dot" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/sarthak03dot" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.instagram.com/sarthak03dot/" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://leetcode.com/u/sarthak03dot/" target="_blank" rel="noopener noreferrer">
          <i class="bx bx-code-alt"></i>
        </a>
        <a href="https://dev.to/sarthak03dot" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-dev-to"></i>
          </a>
      </div>
      <p className="copyright">&copy; Sarthak Singh</p>
    </footer>
  );
};

export default Footer;
