import React from "react";
import { FaCode, FaMobileAlt, FaCloud, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="landing">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1>NovaTech Solutions</h1>
          <p>We build modern, powerful web and mobile experiences for your business.</p>
          <a href="#contact" className="btn">Get Started</a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At <b>NovaTech Solutions</b>, we specialize in designing and developing
          cutting-edge digital products. Our goal is to help brands stand out
          with innovative solutions and exceptional user experience.
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

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"NovaTech completely transformed our online presence — professional and fast!"</p>
            <h4>— Sarah, CEO of FreshBite</h4>
          </div>
          <div className="testimonial">
            <p>"The team built a mobile app that boosted our sales by 40%. Amazing work!"</p>
            <h4>— Mark, Founder of QuickShop</h4>
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
        <p>© 2025 NovaTech Solutions. All rights reserved.</p>
        <div className="socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;