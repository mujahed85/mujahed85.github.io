"use client";

import Summary from "./resume/Summary";
import Tools from "./resume/Tools";
import Cloud from "./resume/Cloud";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        {/* PROFILE */}
        <div className="section-title">
          <h2>Profile</h2>
          <p className="just-align">
            As a seasoned professional, I bring extensive experience across
            diverse industries and technologies, specializing in industrial
            operations and corporate training. My portfolio of clients includes
            tech giants like Facebook, Appatura, and Discovery.
          </p>
        </div>

        <div className="row">

          {/* LEFT COLUMN */}
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

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">

            {/* INDUSTRIAL EXPERIENCE */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img src="assets/img/icons/briefcase.png" alt="Industrial" />
              </div>
              INDUSTRIAL WORKING EXPERIENCE
            </h3>

            <div className="resume-item">
              <ul className="disc">
                {[
                  ["Facebook.png", "discovery-channel.png", "mtdata.png", "suez.png"],
                  ["appatura.png", "fd-logo-2021-1.svg", "npr-logo.png", "novel-ogo.png"],
                  ["reznext.png", "ait-logo.png", "nielet.png", "arizona.png"],
                  ["itbees-logo.png", "hihilent-logo.jpg", "mced.png", "sfk-logo.png"],
                  ["goldman.png", "johnhancock.png", "wellsfargo.png", "pimco.png"],
                ].map((row, idx) => (
                  <li key={idx}>
                    {row.map((file, i) => (
                      <img
                        key={i}
                        className="client-logo"
                        src={`assets/img/client-logo/${file}`}
                        alt={file}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            {/* CORPORATE TRAINING EXPERIENCE */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img src="assets/img/icons/hand-shake.png" alt="Corporate" />
              </div>
              CORPORATE TRAINING EXPERIENCE
            </h3>

            <div className="resume-item">
              <ul className="disc">
                {[
                  ["ltiM.png", "ZenSar.jpg", "EdgeVerve_Infosys_Logo.jpg", "PDO.png"],
                  ["GreatLearning.png", "edureka.png", "Reventure.png", "Cloudadda.png"],
                  ["pepkor.png", "nuvepro.png", "cyforislogo-.png", "sonicbolt.png"],
                  ["VTEST-LOGO-PNG.png", "Nobleprog_0.png", "rexor-logo.jpeg", "healthcare-pharmaceuticals-1646306545[1].png"],
                  ["Oxy.png", "aditya-birla.png", "Techm.png", "shell.png"],

                  // 🔽 Newly added missing images
                  ["Capgemini.png","Cognizant.png", "DOEACC_Logo.jpg","IBM.png"],
                  ["ITC.png", "Incedo.png","Nokia-Logo.wine.png","vodafone.jpg"],
                  ["TCS.png", "Telstra_logo.webp", "Vodafone_Logo.png","nse.png"],
                  ["discovery-channel.png", "disney.png", "goldman.png", "johnDeere.avif"],
                  ["tataPower.jpg"]
                ].map((row, idx) => (
                  <li
                    key={idx}
                    style={{
                      justifyContent: row.length < 4 ? "center" : "flex-start",
                    }}
                  >
                    {row.map((file, i) => (
                      <img
                        key={i}
                        className="client-logo"
                        src={`assets/img/client-logo/${file}`}
                        alt={file}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            {/* RETAIL TRAINING */}
            <h3 className="resume-title">
              <div className="icon-size">
                <img src="assets/img/icons/computer-icons-training-share-icon.png" alt="Retail" />
              </div>
              RETAIL TRAINING EXPERIENCE
            </h3>

            <div className="resume-item">
              <ul className="disc">
                {[
                  ["starAgile.png", "big-class-logo.png", "sunBeam.png", "Apg.jpg"],
                  ["DurgaSoft.png", "sdbi.jpeg", "vpkbiet.webp", "KCT-Coimbatore-logo.jpeg"],
                  ["SVR-logo.jpeg", "bharati-vidyapeeth-deemed-university-pune.png", "sakalmedia.jpeg", "bhartiy vidyapith pune.jpeg"],
                  ["cmr.jpeg", "KJCOE.jpeg", "BATU_logo.png", "ria-logo1.png"],
                ].map((row, idx) => (
                  <li key={idx}>
                    {row.map((file, i) => (
                      <img
                        key={i}
                        className="client-logo"
                        src={`assets/img/client-logo/${file}`}
                        alt={file}
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
              <h5>Computer Science</h5>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
