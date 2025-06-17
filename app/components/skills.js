export default function Skills() {
  return (
    <>
      {/* ======= Achievement Section ======= */}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className=" ">Achievement</h2>
            <p className="just-align">
              I have expertise in the following technologies: Artificial
              Intelligence (AI), Machine Learning (ML), Big Data(Spark,
              Databricks), Cloud computing (specifically AWS, Azure, and GCP),
              Containers(Docker, Kubernetes), and DevOps (including SysOps and
              CloudOps).
            </p>
            <p className="just-align">
              Also we provide an variety of Sessions(Virtual Interactive,onsite,
              Recorded, On Demand), case studies, lab exercises, and
              certifications, that ensures effective learning and knowledge
              retention.
            </p>
          </div>
          <div className="blogs-card">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-lg-5 ">
                <div className="card " style={{ width: "auto", padding: 5 }}>
                  <img
                    src="assets/img/stack-overflow-icon-2048x2048-7ohycn5z.png"
                    className=""
                    style={{ width: 100, alignSelf: "center" }}
                    alt="Mujahed Hussaini"
                  />
                  <div className="card-body">
                    <a href="https://stackoverflow.com/users/462447/mujahed">
                      <h4 className="card-title text-center">Stackoverflow</h4>
                    </a>
                    <p className="just-align">
                      In the Stackoverflow Recognized as a top contributor in
                      the AI and cloud Community helping developers solve
                      complex coding challenges.
                    </p>
                    <div className="row">
                      <div className="col">
                        <img
                          src="assets/img/brozne badge.JPG"
                          alt="Mujahed Hussaini"
                          style={{ width: 210 }}
                        />
                      </div>
                      <div className="col">
                        <img
                          src="assets/img/Sliver badge.JPG"
                          alt="Mujahed Hussaini"
                          style={{ width: 210 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ">
                <div className="card" style={{ width: "auto", padding: 5 }}>
                  <img
                    src="assets/img/microsoft.png"
                    style={{ width: 100, alignSelf: "center" }}
                    alt="Mujahed Hussaini"
                  />
                  <div className="card-body">
                    <a href="https://learn.microsoft.com/en-gb/users/mujahedh/">
                      <h4 className="card-title text-center">
                        Microsoft Learn{" "}
                      </h4>
                    </a>
                    <p className="just-align">
                      Completed over 188 badges in cloud computing and AI, and
                      35 Trophies and A deep understanding of Azure solutions to
                      drive innovative projects.
                    </p>
                    <div
                      className="row"
                      style={{ paddingTop: 25, paddingBottom: 5 }}
                    >
                      <div className="col">
                        <img
                          src="assets/img/m_badge.JPG"
                          alt="Mujahed Hussaini"
                        />
                        <h5>188+ Badges</h5>
                      </div>
                      <div className="col">
                        <img
                          src="assets/img/m_trophy.JPG"
                          alt="Mujahed Hussaini"
                        />
                        <h5>35+ Trophies</h5>
                      </div>
                      <div className="col">
                        <img
                          src="assets/img/arrow-up-right-dots-solid.svg"
                          alt="Mujahed Hussaini"
                          style={{ width: 60, paddingTop: 15 }}
                        />
                        <h5>
                          <br />
                          12+ Level
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}
    </>
  );
}
