import React from "react";
import { FaCode, FaMobileAlt, FaCloud, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="landing">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1>NovaGTech Solutions</h1>
          <p>We build modern, powerful web and mobile experiences for your business.</p>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At <b>NovaGTech</b>, Eryk & Szymon specialize in creating digital products with clean design and smooth performance. We focus on simplicity and usability for all users.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">
            <FaCode className="icon" />
            <h3>Web Development</h3>
            <p>Responsive, high-performance websites built with React and Node.js.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="icon" />
            <h3>Mobile Apps</h3>
            <p>Cross-platform applications with smooth UI and powerful backend.</p>
          </div>
          <div className="service-card">
            <FaCloud className="icon" />
            <h3>Cloud Integration</h3>
            <p>Scalable cloud-based systems to handle your data and automation.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Our Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Eryk created a personal portfolio website using React & Vite to showcase projects and skills.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>Szymon built a cross-platform task manager app for mobile, focusing on UI simplicity and usability.</p>
            <a href="#" className="btn">View Project</a>
          </div>
          <div className="project-card">
            <h3>Cloud API Integration</h3>
            <p>Together, we implemented a cloud-based backend API for handling dynamic data efficiently.</p>
            <a href="#" className="btn">View Project</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Let’s bring your ideas to life. Get in touch with us today!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 NovaGTech Solutions. All rights reserved.</p>
        <div className="socials">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;