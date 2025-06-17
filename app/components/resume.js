'use client';

import Summary from './resume/Summary';
import Tools from './resume/Tools';
import Cloud from './resume/Cloud';

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Profile</h2>
          <p className="just-align">
            As a seasoned professional, I bring extensive experience across
            diverse industries and technologies, specializing in industrial
            operations and corporate training. My rich portfolio of clients
            includes tech giants like Facebook, Appatura, and Discovery,
            where I've demonstrated proficiency in a wide array of
            technologies such as Azure, AWS, GCP, Apache Spark, Python, and
            more. From data engineering and machine learning to cloud
            architecture and solutions development, I excel in delivering
            tailored training programs and driving business success.
          </p>
        </div>
        <div className="row">
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
          <div className="col-lg-6">
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/briefcase.png"
                  alt="Mujahed Hussaini"
                />
              </div>
              INDUSTRIAL WORKING EXPERIENCE
            </h3>
            <div className="resume-item" style={{display: "flex", flexDirection: "column"}}>
              <ul className="disc">
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Facebook.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/discovery-channel.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/mtdata.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/suez.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/appatura.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/fd-logo-2021-1.svg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/npr-logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/novel-ogo.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/reznext.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/ait-logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/nielet.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/arizona.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/itbees-logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/hihilent-logo.jpg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/mced.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/sfk-logo.png"
                    alt="Company Logo"
                  />
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/hand-shake.png"
                  alt="Mujahed Hussaini"
                />
              </div>
              CORPORATE TRAINING EXPERIENCE
            </h3>
            <div className="resume-item">
              <ul className="disc">
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/healthcare-pharmaceuticals-1646306545[1].png"
                    alt="Healthcare Pharma"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Cognizant.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Capgemini.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/ITC.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Incedo.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/johnDeere.avif"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/ltiM.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Nokia-Logo.wine.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/nse.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/shell.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/tataPower.jpg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Vodafone_Logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/ZenSar.jpg"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/EdgeVerve_Infosys_Logo.jpg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/disney.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Telstra_logo.webp"
                    alt="Telstra"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/GreatLearning.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/edureka.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/cgi.jpg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/VTEST-LOGO-PNG.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Nobleprog_0.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/rexor-logo.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/sonicbolt.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/cyforislogo-.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/PDO.png"
                    alt="Company Logo"
                  />
                </li>
              </ul>
            </div>
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/computer-icons-training-share-icon.png"
                  alt="Mujahed Hussaini"
                />
              </div>
              RETAIL TRAINING EXPERIENCE
            </h3>
            <div className="resume-item">
              <ul className="disc">
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/starAgile.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/big-class-logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/sunBeam.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/Apg.jpg"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/DurgaSoft.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/sdbi.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/vpkbiet.webp"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/KCT-Coimbatore-logo.jpeg"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/SVR-logo.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/bharati-vidyapeeth-deemed-university-pune.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/sakalmedia.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/bhartiy vidyapith pune.jpeg"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/cmr.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/KJCOE.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/BATU_logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/ria-logo1.png"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/maulana-logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/DOEACC_Logo.jpg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/vidhydhan-logo.jpg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/deogiri-college-logo.jpeg"
                    alt="Company Logo"
                  />
                </li>
                <li>
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/jayaam-logo.png"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/shayajirao-logo.jpeg"
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/deccan-logo.jpeg "
                    alt="Company Logo"
                  />
                  <img
                    className="client-logo"
                    src="assets/img/client-logo/deccan-college-logo.png"
                    alt="Company Logo"
                  />
                </li>
                <li></li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/book.png"
                  alt="Mujahed Hussaini"
                />
              </div>
              Education
            </h3>
            <div className="resume-item">
              <h4>MCA(ZITS, BAMU)</h4>
              <h5>3 years Post Graduation</h5>
              {/* <p><em>Dr.Babasaheb Ambedkar Marathwada University, Maharashtra.</em></p>
        <p></p> */}
            </div>
            <div className="resume-item">
              <h4>BCS(TPICIT, BAMU)</h4>
              <h5>Graduation in Computer Professional</h5>
              {/* <p><em>Dr.Babasaheb Ambedkar Marathwada University, Maharashtra.</em></p>
        <p></p> */}
            </div>
            <div className="resume-item">
              <h4>BSC(MAC)</h4>
              <h5>Specialized in ComputerS cience</h5>
              <p>
                <em>
                  Dr.Babasaheb Ambedkar Marathwada University, Maharashtra.
                </em>
              </p>
              <p />
            </div>
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/medal-1.png"
                  alt="Mujahed Hussaini"
                />
              </div>
              Certification
            </h3>
            <div className="resume-item">
              <h4>Certification</h4>
              <ul>
                <li>Artificial Intelligence Certified From Google.</li>
                <li>Rockspace Cloud University</li>
                <li>National Level Best In Programming </li>
                <li>
                  State Level 1st Prize holder in Computer Programming.
                </li>
                <li>Adobe Master Certified.</li>
                <li>IBM Big Data Certified.</li>
                <li>RPA Architecture Certified.</li>
                <li>MCAD-SCJP International</li>
              </ul>
            </div>
            <h3 className="resume-title">
              <div className="icon-size">
                <img
                  src="assets/img/icons/academics.png"
                  alt="Mujahed Hussaini"
                />
              </div>
              ACADEMIC KNOWLEDGE
            </h3>
            <div className="resume-item">
              <h4>Experience in Subjects</h4>
              <ul>
                <li>
                  Data Structure &amp; C, C++, Java, VB,C# and Python.
                </li>
                <li>
                  Machine Learning, Deep Learning, Artificial Intelligence
                  &amp; Data Science.
                </li>
                <li>
                  Numerical Methods(NM) &amp; Discrete Mathematics(DM)
                </li>
                <li>
                  Android, PHP, ASP. Net, Fedora, Web Technology(HTML, CSS,
                  JavaScript)
                </li>
                <li>Database Management System(DBMS, RDBMS, OLTP,SQL)</li>
                <li>
                  Data warehouse, ETL, OLAP, NoSQL, Big Data, Distributed
                  Compute &amp; Cloud
                </li>
                <li>Statistical Method &amp; Computer Vision.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
