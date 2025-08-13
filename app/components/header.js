// Header.js
import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  const getActiveClass = (id) => (activeSection === id ? "active" : "");

  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li>
            <a
              href="#hero"
              className={`nav-link scrollto ${getActiveClass("hero")}`}
              onClick={() => setActiveSection("hero")}
            >
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link scrollto ${getActiveClass("about")}`}
              onClick={() => setActiveSection("about")}
            >
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={`nav-link scrollto ${getActiveClass("resume")}`}
              onClick={() => setActiveSection("resume")}
            >
              <i className="bx bx-book-content"></i> <span>Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#Skill"
              className={`nav-link scrollto ${getActiveClass("Skill")}`}
              onClick={() => setActiveSection("Skill")}
            >
              <i className="bx bx-shield-quarter"></i> <span>Skill's</span>
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={`nav-link scrollto ${getActiveClass("gallery")}`}
              onClick={() => setActiveSection("gallery")}
            >
              <i className="bx bx-image-add"></i> <span>Gallery</span>
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className={`nav-link scrollto ${getActiveClass("blog")}`}
              onClick={() => setActiveSection("blog")}
            >
              <i className="bx bxl-blogger"></i> <span>Blog's</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link scrollto ${getActiveClass("services")}`}
              onClick={() => setActiveSection("services")}
            >
              <i className="bx bx-server"></i> <span>Services</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link scrollto ${getActiveClass("contact")}`}
              onClick={() => setActiveSection("contact")}
            >
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
