import { useState } from "react";
import "./App.css";

import suryaImage from "./assets/luffyy.webp";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="nav-logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span>Surya V</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>


      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        <div className="hero-left">

          <p className="hello">Hello, I'm</p>

          <h1>
            Surya <span>V</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern web applications using Java, Spring Boot,
            React and MySQL. I enjoy learning through real projects
            and creating simple, useful solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="/Surya-V-Resume.pdf"
              download
              className="primary-btn"
            >
              ↓ Download Resume
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects →
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/kingofzoro"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/surya-v-4b4b383a3"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>


        <div className="hero-right">

          <div className="hero-image-bg"></div>

          <img
            src={suryaImage}
            alt="Surya V"
            className="hero-image"
          />

          <div className="code-text">
            &lt; Code /&gt;
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="about section">

        <div className="about-image-container">

          <div className="about-image-bg"></div>

          <img
            src={suryaImage}
            alt="Surya V"
            className="about-image"
          />

        </div>


        <div className="about-content">

          <p className="section-small-title">
            ABOUT ME
          </p>

          <h2>Who I Am</h2>

          <p>
            I'm Surya V, a BSc Computer Science graduate and a
            fresher looking to start my career as a Full Stack Developer.
          </p>

          <p>
            I have been learning Java, Spring Boot, React and MySQL
            by building practical projects. Working on projects has
            helped me understand how frontend, backend and databases
            work together.
          </p>

          <p>
            I'm continuously improving my programming, problem-solving
            and development skills by building real applications.
          </p>


          <div className="about-info">

            <div className="info-box">
              <span className="info-icon">🎓</span>
              <div>
                <strong>Education</strong>
                <p>BSc Computer Science</p>
              </div>
            </div>

            <div className="info-box">
              <span className="info-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Sriperumbudur, Tamil Nadu</p>
              </div>
            </div>

            <div className="info-box">
              <span className="info-icon">💻</span>
              <div>
                <strong>Experience</strong>
                <p>Fresher</p>
              </div>
            </div>

          </div>


          <a
            href="/Surya-V-Resume.pdf"
            download
            className="resume-btn"
          >
            ↓ Download Resume
          </a>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="projects section">

        <div className="section-heading">

          <p className="section-small-title">
            MY PROJECTS
          </p>

          <h2>What I've Built</h2>

          <p>
            Here are some of the projects I've worked on while
            learning and improving my development skills.
          </p>

        </div>


        <div className="project-grid">


          {/* TODO */}

          <div className="project-card">

            <div className="project-image todo-image">

              <div className="fake-todo">

                <div className="fake-todo-title">
                  Todo App
                </div>

                <div className="todo-item">
                  ✓ Learn Java
                </div>

                <div className="todo-item">
                  ✓ Build API
                </div>

                <div className="todo-item">
                  ○ Connect React
                </div>

                <button>Add Task</button>

              </div>

            </div>

            <div className="project-content">

              <h3>Todo App</h3>

              <p>
                A simple task management application built to
                understand CRUD operations and the connection
                between frontend, backend and database.
              </p>

              <div className="tech-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>MySQL</span>
              </div>

              <a href="#contact" className="project-link">
                View Project →
              </a>

            </div>

          </div>


          {/* CALCULATOR */}

          <div className="project-card">

            <div className="project-image calculator-image">

              <div className="calculator">

                <div className="calc-display">
                  0
                </div>

                <div className="calc-buttons">

                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
                  <button>÷</button>

                  <button>4</button>
                  <button>5</button>
                  <button>6</button>
                  <button>×</button>

                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>-</button>

                  <button>0</button>
                  <button>.</button>
                  <button className="equal">=</button>
                  <button>+</button>

                </div>

              </div>

            </div>

            <div className="project-content">

              <h3>Calculator</h3>

              <p>
                A responsive calculator application built with
                React to practice state handling, components and
                user interactions.
              </p>

              <div className="tech-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

             <a
  href="https://calculator-six-delta-50.vercel.app/"
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View Project →
</a>

            </div>

          </div>


          {/* ECOMMERCE */}

          <div className="project-card featured-card">

            <div className="project-image ecommerce-image">

              <div className="ecommerce-preview">

                <div className="ecommerce-nav">
                  ☠ PIRATESS
                </div>

                <div className="anime-banner">
                  Anime Dresses
                </div>

                <div className="anime-products">

                  <div>⚔️</div>
                  <div>🏴‍☠️</div>
                  <div>🔥</div>
                  <div>⚡</div>

                </div>

              </div>

            </div>

            <div className="project-content">

              <h3>Anime E-Commerce Website</h3>

              <p>
                An anime-themed clothing e-commerce website created
                for anime fans with product browsing, search, cart
                and order flow.
              </p>

              <div className="tech-tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>Java</span>
              </div>

              <a href="https://piratess-rust.vercel.app" className="project-link">
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills section">

        <div className="section-heading">

          <p className="section-small-title">
            SKILLS
          </p>

          <h2>My Tech Stack</h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon java-icon">☕</div>
            <h3>Java</h3>
            <p>OOP · Collections · Exceptions</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon spring-icon">🌱</div>
            <h3>Spring Boot</h3>
            <p>REST API · Backend</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon react-icon">⚛</div>
            <h3>React</h3>
            <p>Components · Hooks</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon mysql-icon">🐬</div>
            <h3>MySQL</h3>
            <p>Queries · Database</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon html-icon">HTML</div>
            <h3>HTML</h3>
            <p>Semantic · Forms</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon css-icon">CSS</div>
            <h3>CSS</h3>
            <p>Flexbox · Responsive</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon js-icon">JS</div>
            <h3>JavaScript</h3>
            <p>ES6 · DOM · Logic</p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact section">

        <div className="contact-content">

          <p className="section-small-title">
            CONTACT
          </p>

          <h2>Let's Build Something</h2>

          <p>
            I'm currently looking for opportunities to start my
            career as a Full Stack Developer.
          </p>

          <div className="contact-info">

            <div>
              <span>📧</span>
              <p>surya@example.com</p>
            </div>

            <div>
              <span>📍</span>
              <p>Sriperumbudur, Tamil Nadu</p>
            </div>

          </div>

        </div>


        <div className="contact-card">

          <h3>Get In Touch</h3>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button>
            Send Message →
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-about">

            <div className="footer-logo">
              <span>&lt;/&gt;</span> Surya V
            </div>

            <h3>Full Stack Developer</h3>

            <p>
              Turning ideas into real web applications.
            </p>

            <div className="footer-social">

              <a
                href="https://github.com/kingofzoro"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/surya-v-4b4b383a3"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="#contact">
                Email
              </a>

            </div>

          </div>


          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-contact">

            <h4>Contact Me</h4>

            <p>📧 surya@example.com</p>
            <p>📍 Sriperumbudur, Tamil Nadu</p>

            <p>
              Let's build something great!
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Surya V. All rights reserved.
          </p>

          <button
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

        </div>

      </footer>

    </div>
  );
}

export default App;