import React, { useState, useEffect  } from "react";
import { FaCode, FaMobileAlt, FaCloud, FaGithub, FaLinkedin, FaTwitter, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import ParticlesBG from "./particlesBG.jsx";
import "./App.css";

function App() {
  const [category, setCategory] = useState("all");

  // Typing effect
  const fullText = "NovaGTech Solutions";
const [displayedText, setDisplayedText] = useState("");

useEffect(() => {
  let index = 0;

  function typeLetter() {
    if (index < fullText.length) {
      setDisplayedText(fullText.slice(0, index + 1)); // slice gwarantuje, że nie ma undefined
      index++;
      setTimeout(typeLetter, 150); // rekurencja zamiast setInterval
    }
  }

  typeLetter();
}, []);
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and experience with modern web technologies.",
      link: "#",
      category: "web",
    },
    {
      title: "Task Manager App",
      description: "A cross-platform task management app designed for intuitive UI, smooth performance, and efficient task organization.",
      link: "#",
      category: "mobile",
    },
    {
      title: "Cloud API Integration",
      description: "A cloud-based backend API for secure and scalable data management and integration with modern applications.",
      link: "#",
      category: "cloud",
    },
  ];

  return (
    <div className="landing">
      {/* HERO */}
      <header className="hero">
        <ParticlesBG />
        <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
          <h1>{displayedText}<span className="cursor">|</span></h1>
          <p>Creating innovative digital solutions with clean design, smooth performance, and user-focused interfaces.</p>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          <b>NovaGTech</b> specializes in web and mobile development, focusing on simplicity, usability, and performance. We turn ideas into functional, modern applications and websites.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">
            <FaCode className="icon" />
            <h3>Web Development</h3>
            <p>High-performance, responsive websites built with modern web technologies.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="icon" />
            <h3>Mobile Apps</h3>
            <p>Cross-platform applications with intuitive UI and robust backend systems.</p>
          </div>
          <div className="service-card">
            <FaCloud className="icon" />
            <h3>Cloud Integration</h3>
            <p>Scalable cloud-based solutions for efficient and secure data management.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section id="skills" className="skills">
  <h2>Our Skills</h2>
  <div className="skill-list">
    <div className="skill-card"><FaHtml5 size={40} color="#e34c26" /><p>HTML</p></div>
    <div className="skill-card"><FaCss3Alt size={40} color="#264de4" /><p>CSS</p></div>
    <div className="skill-card"><FaJs size={40} color="#f0db4f" /><p>JavaScript</p></div>
    <div className="skill-card"><SiTypescript size={40} color="#007acc" /><p>TypeScript</p></div>
    <div className="skill-card"><FaReact size={40} color="#61dafb" /><p>React</p></div>
    <div className="skill-card"><SiVite size={40} color="#646cff" /><p>Vite</p></div>
    <div className="skill-card"><FaNodeJs size={40} color="#3c873a" /><p>Node.js</p></div>
    <div className="skill-card"><FaPython size={40} color="#306998" /><p>Python</p></div>
    <div className="skill-card"><FaCode size={40} color="#239120" /><p>C#</p></div> {/* zamiast nieistniejącego SiCsharp */}
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Our Projects</h2>

        {/* Kategorie */}
        <div className="project-categories">
          <button className={`category-btn ${category === 'all' ? 'active' : ''}`} onClick={() => setCategory('all')}>All</button>
          <button className={`category-btn ${category === 'web' ? 'active' : ''}`} onClick={() => setCategory('web')}>Web</button>
          <button className={`category-btn ${category === 'mobile' ? 'active' : ''}`} onClick={() => setCategory('mobile')}>Mobile</button>
          <button className={`category-btn ${category === 'cloud' ? 'active' : ''}`} onClick={() => setCategory('cloud')}>Cloud</button>
        </div>

        <div className="project-list">
          {projects
            .filter(project => category === 'all' || project.category === category)
            .map((project, index) => (
              <div className="project-card fade-in" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn">View Project</a>
              </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have an idea? Let's turn it into reality. Reach out to us today!</p>
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