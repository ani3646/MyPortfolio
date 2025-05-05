import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/ankit-dixit-8a444931b" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/ani3646" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.instagram.com/__4nkit__24/" target="_blank" rel="noopener noreferrer">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="https://leetcode.com/u/anki3646/" target="_blank" rel="noopener noreferrer">
          <i class="bx bx-code-alt"></i>
        </a>
        <a href="https://dev.to/ankit_dixit_ad214845f18bb" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-dev-to"></i>
          </a>
      </div>
      <p className="copyright">&copy; Ankit Dixit</p>
    </footer>
  );
};

export default Footer;
