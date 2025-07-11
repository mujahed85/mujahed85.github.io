"use client";

import Summary from "./resume/Summary";
import Tools from "./resume/Tools";
import Cloud from "./resume/Cloud";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        {/* Profile Section */}
        <div className="section-title">
          <h2>Profile</h2>
          <p className="just-align">
            As a seasoned professional, I bring extensive experience across
            diverse industries and technologies, specializing in industrial
            operations and corporate training. My portfolio of clients includes
            tech giants like Facebook, Appatura, and Discovery, where I've
            demonstrated proficiency in technologies such as Azure, AWS, GCP,
            Apache Spark, Python, and more. From data engineering and machine
            learning to cloud architecture and solutions development, I excel in
            delivering tailored training programs and driving business success.
          </p>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <h3 className="resume-title">
              <div className="icon-size">
                <img src="assets/img/icons/contract.png" alt="Summary" />
              </div>
              Summary
            </h3>
            <Summary />
            <Tools />
            <Cloud />
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            {/* INDUSTRIAL WORKING EXPERIENCE */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/briefcase.png"
                  alt="Industrial Experience"
                />
              </div>
              INDUSTRIAL WORKING EXPERIENCE
            </h3>
            <div className="resume-item">
              <ul className="disc">
                {[
                  [
                    "Facebook.png",
                    "discovery-channel.png",
                    "mtdata.png",
                    "suez.png",
                  ],
                  [
                    "appatura.png",
                    "fd-logo-2021-1.svg",
                    "npr-logo.png",
                    "novel-ogo.png",
                  ],
                  ["reznext.png", "ait-logo.png", "nielet.png", "arizona.png"],
                  [
                    "itbees-logo.png",
                    "hihilent-logo.jpg",
                    "mced.png",
                    "sfk-logo.png",
                  ],
                  ["goldman.png","johnhancock.png","wellsfargo.png","pimco.png"], 
                ].map((row, idx) => (
                  <li key={`industrial-${idx}`}>
                    {row.map((file, i) => (
                      <img
                        key={i}
                        className="client-logo"
                        src={`assets/img/client-logo/${file}`}
                        alt={file
                          .replace(/\.[^/.]+$/, "")
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            {/* CORPORATE TRAINING EXPERIENCE */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/hand-shake.png"
                  alt="Corporate Training"
                />
              </div>
              CORPORATE TRAINING EXPERIENCE
            </h3>
            <div className="resume-item">
              <ul className="disc">
                {[
                  [
                    "healthcare-pharmaceuticals-1646306545[1].png",
                    "BMW.png",
                    "IBM.png",
                    "nuvepro.png",
                  ],
                  [
                    "Cloudadda.png",
                    "pepkor.png",
                    "Cognizant.png",
                    "Capgemini.png",
                  ],
                  ["ITC.png", "Incedo.png", "johnDeere.avif", "ltiM.png"],
                  [
                    "Nokia-Logo.wine.png",
                    "nse.png",
                    "shell.png",
                    "tataPower.jpg",
                  ],
                  [
                    "Vodafone_Logo.png",
                    "ZenSar.jpg",
                    "EdgeVerve_Infosys_Logo.jpg",
                    "disney.png",
                  ],
                  [
                    "Telstra_logo.webp",
                    "GreatLearning.png",
                    "edureka.png",
                    "cgi.jpg",
                  ],
                  [
                    "VTEST-LOGO-PNG.png",
                    "Nobleprog_0.png",
                    "rexor-logo.jpeg",
                    "sonicbolt.png",
                  ],
                  ["cyforislogo-.png", "PDO.png"],
                ].map((row, idx) => (
                  <li key={`corporate-${idx}`}>
                    {row.map((file, i) => (
                      <img
                        key={i}
                        className="client-logo"
                        src={`assets/img/client-logo/${file}`}
                        alt={file
                          .replace(/\.[^/.]+$/, "")
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            {/* RETAIL TRAINING EXPERIENCE */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/computer-icons-training-share-icon.png"
                  alt="Retail Training"
                />
              </div>
              RETAIL TRAINING EXPERIENCE
            </h3>
            <div className="resume-item">
              <ul className="disc">
                {[
                  [
                    "starAgile.png",
                    "big-class-logo.png",
                    "sunBeam.png",
                    "Apg.jpg",
                  ],
                  [
                    "DurgaSoft.png",
                    "sdbi.jpeg",
                    "vpkbiet.webp",
                    "KCT-Coimbatore-logo.jpeg",
                  ],
                  [
                    "SVR-logo.jpeg",
                    "bharati-vidyapeeth-deemed-university-pune.png",
                    "sakalmedia.jpeg",
                    "bhartiy vidyapith pune.jpeg",
                  ],
                  ["cmr.jpeg", "KJCOE.jpeg", "BATU_logo.png", "ria-logo1.png"],
                  [
                    "maulana-logo.png",
                    "DOEACC_Logo.jpg",
                    "vidhydhan-logo.jpg",
                    "deogiri-college-logo.jpeg",
                  ],
                  [
                    "jayaam-logo.png",
                    "shayajirao-logo.jpeg",
                    "deccan-logo.jpeg",
                    "deccan-college-logo.png",
                  ],
                ].map((row, idx) => (
                  <li key={`retail-${idx}`}>
                    {row.map((file, i) => (
                      <img
                        key={i}
                        className="client-logo"
                        src={`assets/img/client-logo/${file}`}
                        alt={file.replace(/\.[^/.]+$/, "").replace(/-/g, " ")}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            {/* EDUCATION */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img src="assets/img/icons/book.png" alt="Education" />
              </div>
              Education
            </h3>
            <div className="resume-item">
              <h4>MCA (ZITS, BAMU)</h4>
              <h5>3 Years Post Graduation</h5>
            </div>
            <div className="resume-item">
              <h4>BCS (TPICIT, BAMU)</h4>
              <h5>Graduation in Computer Professional</h5>
            </div>
            <div className="resume-item">
              <h4>BSc (MAC)</h4>
              <h5>Specialized in Computer Science</h5>
              <p>
                <em>
                  Dr. Babasaheb Ambedkar Marathwada University, Maharashtra
                </em>
              </p>
            </div>

            {/* CERTIFICATION */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img src="assets/img/icons/medal-1.png" alt="Certification" />
              </div>
              Certification
            </h3>
            <div className="resume-item">
              <ul>
                <li>Artificial Intelligence Certified from Google</li>
                <li>Rockspace Cloud University</li>
                <li>National Level Best in Programming</li>
                <li>State Level 1st Prize Holder in Computer Programming</li>
                <li>Adobe Master Certified</li>
                <li>IBM Big Data Certified</li>
                <li>RPA Architecture Certified</li>
                <li>MCAD-SCJP International</li>
              </ul>
            </div>

            {/* ACADEMIC KNOWLEDGE */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/academics.png"
                  alt="Academic Knowledge"
                />
              </div>
              Academic Knowledge
            </h3>
            <div className="resume-item">
              <ul>
                <li>Data Structures & C, C++, Java, VB, C#, and Python</li>
                <li>
                  Machine Learning, Deep Learning, Artificial Intelligence &
                  Data Science
                </li>
                <li>Numerical Methods (NM) & Discrete Mathematics (DM)</li>
                <li>
                  Android, PHP, ASP.NET, Fedora, Web Technologies (HTML, CSS,
                  JavaScript)
                </li>
                <li>Database Systems (DBMS, RDBMS, OLTP, SQL)</li>
                <li>
                  Data Warehousing, ETL, OLAP, NoSQL, Big Data, Distributed
                  Compute & Cloud
                </li>
                <li>Statistical Methods & Computer Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
