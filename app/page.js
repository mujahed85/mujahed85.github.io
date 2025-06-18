"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader";
import Header from "./components/header";
import Hero from "./components/hero";

// Lazy-loaded components
import dynamic from "next/dynamic";

const About = dynamic(() => import("./components/about"));
const Skills = dynamic(() => import("./components/skills"));
const Resume = dynamic(() => import("./components/resume"));
const Skill = dynamic(() => import("./components/skill"));
const Gallery = dynamic(() => import("./components/gallery"));
const Testimonial = dynamic(() => import("./components/testimonial"));
const Blog = dynamic(() => import("./components/blog"));
const Services = dynamic(() => import("./components/services"));
const Contact = dynamic(() => import("./components/contact"));
const Footer = dynamic(() => import("./components/footer"));

const sectionIds = [
  "hero",
  "about",
  "skills",
  "resume",
  "Skill",
  "gallery",
  "blog",
  "services",
  "contact",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 100, once: false });
  }, []);

  // Load observer for section nav highlighting
  useEffect(() => {
    if (!isInitialLoaded) return;

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
          setActiveSection(id || "");
          document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.classList.remove("active");
          });
          if (navLink) navLink.classList.add("active");
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isInitialLoaded]);

  const handleToggle = () => {
    document.body.classList.toggle("mobile-nav-active");
    setIsNavOpen(!isNavOpen);
  };

  // Wait until Header and Hero have mounted
  useEffect(() => {
    // Simulate load delay (you could do a real check here)
    const timer = setTimeout(() => {
      setIsInitialLoaded(true);
    }, 1000); // You can tweak the timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isInitialLoaded && <Preloader />}

      <i
        className={`bi mobile-nav-toggle d-lg-none ${
          isNavOpen ? "bi-x" : "bi-list"
        }`}
        onClick={handleToggle}
      ></i>

      <Header activeSection={activeSection} />
      <Hero />

      {isInitialLoaded && (
        <>
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
      )}
    </>
  );
}
