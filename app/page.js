"use client";
import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Resume from "./components/resume";
import Skill from "./components/skill";
import Gallery from "./components/gallery";
import Testimonial from "./components/testimonial";
import Blog from "./components/blog";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";

const sectionIds = [
  "hero",
  "about",
  "skills",
  "resume",
  "Skill", // fixed to lowercase
  "gallery",
  "blog",
  "services",
  "contact",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
          // Update active section state
          setActiveSection(id || "");

          // Optionally handle the active class directly here as well
          document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.classList.remove("active");
          });

          if (navLink) {
            navLink.classList.add("active");
          }
        }
      });
    }, observerOptions);

    // Observe all section elements
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
    });
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    document.body.classList.toggle("mobile-nav-active");
    setIsNavOpen(!isNavOpen);
    console.log("Toggle clicked"); // You can put `debugger;` here
  };
  return (
    <>
      <i
        className={`bi mobile-nav-toggle d-lg-none ${
          isNavOpen ? "bi-x" : "bi-list"
        }`}
        onClick={handleToggle}
      ></i>
      <Header activeSection={activeSection} />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Skill />
        <Gallery />
        <Testimonial />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
