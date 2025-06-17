'use client';

import Programming from './skill/Programming';
import Databases from './skill/Databases';

export default function Skill() {
  return (
    <section id="Skill" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skill's Briefing</h2>
          <p className="just-align">
            In the Skill section, I showcase my proficiency and expertise
            across various domains, demonstrating a diverse set of
            competencies acquired through education, professional experiences,
            and continuous learning endeavors. With a keen eye for innovation
            and a passion for excellence, I continually strive to expand my
            skill set, adapt to emerging technologies, and deliver impactful
            solutions. From technical proficiencies to soft skills such as
            communication and teamwork, my Skill section reflects a commitment
            to personal and professional growth, highlighting my ability to
            contribute effectively in dynamic environments and add value to
            diverse projects and initiatives.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Programming />
            <Databases />
          </div>
        </div>
      </div>
    </section>
  );
}
