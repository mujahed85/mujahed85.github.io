"use client";
import { React, useEffect } from "react";

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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
    });
  }, []);
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Header />
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
