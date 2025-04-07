import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import sarthakImg from "../assets/sarthak.jpg";
import TripTalesImg from "../assets/Triptales.png";
const skillsData = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "C", "HTML", "CSS", "Python", "MySQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "EJS", "Context API", "Bootstrap CSS", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "MongoDB Compass"],
  },
];
const projects = [
  {
    title: "TripTales.in",
    description:
      "TripTales.in is a dynamic web-based traveling platform that serves as a hub for travelers to explore destinations plan journeys, and share their travel experiences.",
    image: TripTalesImg,
    tech: ["EJS", "MongoDB Compass", "Bootstrap CSS", "Express", "Node.js"],
    source: "https://github.com/sarthak03dot/PROJECT-TOURISTER",
    demo: "https://triptales-dot.onrender.com/listings",
  },
  {
    title: "TripTales.in",
    description:
      "TripTales.in is a dynamic web-based traveling platform that serves as a hub for travelers to explore destinations plan journeys, and share their travel experiences.",
    image: TripTalesImg,
    tech: ["EJS", "MongoDB Compass", "Bootstrap CSS", "Express", "Node.js"],
    source: "https://github.com/sarthak03dot/PROJECT-TOURISTER",
    demo: "https://triptales-dot.onrender.com/listings",
  },
  {
    title: "TripTales.in",
    description:
      "TripTales.in is a dynamic web-based traveling platform that serves as a hub for travelers to explore destinations plan journeys, and share their travel experiences.",
    image: TripTalesImg,
    tech: ["EJS", "MongoDB Compass", "Bootstrap CSS", "Express", "Node.js"],
    source: "https://github.com/sarthak03dot/PROJECT-TOURISTER",
    demo: "https://triptales-dot.onrender.com/listings",
  },
];

const Home = () => {
  const formRef = useRef(null);
  const notificationRef = useRef(null);
  const notificationTextRef = useRef(null);
  const progressBarRef = useRef(null);
  const typedRef = useRef(null);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://portfolio-contact-cgr9.onrender.com/sent-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (res.ok) {
        showNotification(result.message, "success");
        form.reset();
      } else {
        showNotification(result.message || "Something went wrong.", "error");
      }
    } catch (err) {
      showNotification("Failed to send message. Please try again.", "error");
    }
  };
  const showNotification = (message, type) => {
    const notification = notificationRef.current;
    const text = notificationTextRef.current;
    const progress = progressBarRef.current;

    text.innerHTML = message;
    text.style.color = type === "success" ? "#28a745" : "#dc3545";
    notification.style.display = "block";
    notification.style.opacity = 1;

    // Reset progress bar instantly
    progress.style.transition = "none";
    progress.style.width = "100%";

    setTimeout(() => {
      progress.style.transition = "width 5s linear";
      progress.style.width = "0%";
    }, 50);

    setTimeout(() => {
      notification.style.opacity = 0;
      setTimeout(() => {
        notification.style.display = "none";
        progress.style.transition = "none";
        progress.style.width = "100%";
      }, 300);
    }, 5000);
  };


  useEffect(()=>{
    typedRef.current = new Typed(".multiple-text",{
      strings:[
        "Web Developer",
        "Web Designer",
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
      ],
      typeSpeed:80,
      backDelay:1200,
      backSpeed:80,
      loop:true,
    });
    return ()=>{
      typedRef.current.destroy();
    }
  },[]);

  return (
    <>
      {/* Home Section */}
      <section className="Home" id="Home">
        <div className="home-img">
          <img src={sarthakImg} alt="Profile" />
        </div>
        <div className="home-content">
          <h3>Hello, Myself</h3>
          <h1>Sarthak Singh</h1>
          <h3>
            And I'm a <span className="multiple-text"></span>
          </h3>
          <p>
            {" "}
            I specialize in building scalable, efficient, and secure backend
            solutions for web applications. With expertise in Node.js,
            Express.js, and database management (MongoDB), I focus on creating
            robust APIs, authentication systems, and seamless server-side logic.
          </p>
          <div className="social-media">
            <a
              href="https://in.linkedin.com/in/sarthak03dot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/sarthak03dot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/sarthak03dot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://leetcode.com/u/sarthak03dot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-code-alt"></i>
            </a>
            <a
              href="https://dev.to/sarthak03dot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-dev-to"></i>
            </a>
          </div>{" "}
          <a
            href="https://drive.google.com/file/d/1cBsA14sWGSyOpcIth40sTbYKuiCT3eqE/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </section>
      {/* About Section */}
      <section className="about" id="About">
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>
            I'm <span>MERN Stack Developer</span>
          </h3>
          <p>
            I am a MERN Stack Developer with a strong passion for building
            dynamic and scalable web applications. With expertise in MongoDB,
            Express.js, React, and Node.js, I specialize in developing
            full-stack solutions that ensure seamless user experiences and
            robust backend functionality. I have hands-on experience in
            authentication, database management and API development, allowing me
            to create efficient and high-performing applications. My goal is to
            develop innovative and user-friendly digital solutions that enhance
            productivity and user engagement.
          </p>
          <a href="/" className="btn">
            Read More
          </a>
        </div>
        <div className="about-img">
          <img src={sarthakImg} alt="profileImg" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="Skills">
        <h2 className="heading">
          Skills & <span>Tech Stack</span>
        </h2>
        <p>
          Technologies and tools I've worked with and mastered over the years
        </p>
        <div className="skills-container">
          {skillsData.map((category) => (
            <div className="skills-card" key={category.title}>
              <h3>{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}

      <section className="projects" id="Projects">
        <h2 className="heading">Projects</h2>
        <p>A Showcase of my best work, personal projects, and contributions</p>
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech, i) => (
                    <span className="project-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-btn">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <i class="bx bx-link-external"></i> Live Demo
                    </a>
                  )}
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <i className="bx bxl-github"></i>Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="Contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>
              Let's <span>Talk</span>
            </h3>
            <p>
              {" "}
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out.
            </p>
            <div className="info-card">
              <div>
                <h4>
                  <i class="bx bxs-envelope"></i>&nbsp;&nbsp;&nbsp;Email
                </h4>
                <p>sarthak03december@gmail.com</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <h4>
                  <i class="bx bx-phone"></i>&nbsp;&nbsp;&nbsp;Phone
                </h4>
                <p>+91 7652093805</p>
              </div>
            </div>
            <div className="info-card">
              <div>
                <h4>
                  <i class="bx bxs-edit-location"></i>&nbsp;&nbsp;&nbsp;Location
                </h4>
                <p>Mirzapur Utter Pradesh, India</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>
              Send a <span>Message</span>
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="text"
                  name="email_sub"
                  placeholder="Email Subject"
                  required
                />
              </div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn">
                <i class="bx bx-send"></i>&nbsp;&nbsp;&nbsp;&nbsp;Send Message
              </button>

              <div id="notification" ref={notificationRef}>
                <span id="notification-text" ref={notificationTextRef}></span>
                <div id="progress-bar" ref={progressBarRef}></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
