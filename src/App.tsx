import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Kidus</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Kidus Basazinew</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src="../profile-pic.png"
            alt="Kidus Baszibew profile picture"
            className="about-pic"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Kidus Basazinew</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            {/* <button
              className="btn btn-color-2"
              onClick={() => window.open("./assets/resume-example.pdf")}
            >
              Download CV
            </button> */}
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="../linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/kidus-basazinew-779914225/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPdBMvbw%2BSkuHXJzOQ6s%2FTQ%3D%3D")
              }
            />
            <img
              src="../github.png"
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/KidusBasazinew")
              }
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="../profile-pic.png"
              alt="Profile picture"
              className="me"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="../experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="../education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Self learning
                  <br />
                  Over 2 years
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I'm Kidus Basazinew, a passionate developer with a keen
                interest in creating dynamic and engaging web applications. With
                a solid foundation in front-end technologies like HTML, CSS,
                JavaScript, and React, I strive to build user-friendly
                interfaces that provide seamless experiences. I thrive on
                solving complex problems and continuously seek opportunities to
                enhance my skills. My journey in web development has equipped me
                with not only technical expertise but also a strong
                understanding of design principles and user experience.
              </p>
            </div>
          </div>
        </div>
        <img
          src="../arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "#experience")}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="../checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="../arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "#projects")}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="../project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                k-labs projects page
              </h2>
              <div className="btn-container">
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://github.com/KidusBasazinew/k-labs"
                >
                  Github
                </a>
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://k-labs-tau.vercel.app/"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="../project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                k-labs ordering page
              </h2>
              <div className="btn-container">
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://github.com/KidusBasazinew/k-labs"
                >
                  Github
                </a>
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://k-labs-tau.vercel.app/"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="../project-4.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                k-labs welcome page
              </h2>
              <div className="btn-container">
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://github.com/KidusBasazinew/k-labs"
                >
                  Github
                </a>
                <a
                  className="btn btn-color-2 project-btn"
                  href="https://k-labs-tau.vercel.app/"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="../arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "#contact")}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="../email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="https://kidusbw@gmail.com">kidusbw@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="../linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/kidus-basazinew-779914225/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPdBMvbw%2BSkuHXJzOQ6s%2FTQ%3D%3D">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Kidus Basazinew. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
