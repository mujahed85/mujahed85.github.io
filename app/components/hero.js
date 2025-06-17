"use client ";
import React, { useEffect, useRef } from "react";

export default function Hero() {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const btn = buttonRef.current;

    const toggleAudio = () => {
      if (audio.paused) {
        audio.play();
        btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      } else {
        audio.pause();
        btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      }
    };

    btn.addEventListener("click", toggleAudio);

    // Clean up the event listener on unmount
    return () => {
      btn.removeEventListener("click", toggleAudio);
    };
  }, []);

  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <video id="background-video" autoPlay loop muted>
          <source src="assets/img/medi/C0003_NoAudio.mp4" type="video/mp4" />
        </video>

        <audio ref={audioRef} autoPlay loop>
          <source
            src="assets/img/medi/lovex27s-serenade-valentines-day-188266.mp3"
            type="audio/mp3"
          />
        </audio>

        <div id="audio-control-btn" ref={buttonRef}>
          <i className="fa-solid fa-volume-high align-items-center" />
        </div>

        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Mujahed Hussaini</h1>
          <p />
          <div className="social-links">
            <a href="https://topmate.io/mujahed" className="topmate">
              <i className="bx bxl-topmate" />
            </a>
            <a href="https://in.linkedin.com/in/mujahed-h" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
