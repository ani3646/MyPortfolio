import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const menu = menuIconRef.current;
    const navbar = navbarRef.current;

    const handleClick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    const handleScroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    menu.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      menu.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="header">
      <a href="#Home" className="logo">
        Ankit Kumar Dixit
      </a>
      <i className="bx bx-menu" ref={menuIconRef} id="menu-icon"></i>

      <nav className="navbar" ref={navbarRef}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a
          href="https://drive.google.com/file/d/1xhiyMldBm3QlF0QGpSEpsX5Y0P3kuYN3/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="resume-btn btn"
        >
          Resume
        </a>
        <a href="/">
          <i
            id="theme"
            className={`bx ${isDark ? "bx-sun" : "bx-moon"} theme-toggle`}
            onClick={toggleTheme}
            title="Toggle Dark Mode"
          ></i>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
