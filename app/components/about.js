
export default function About() {

  return (
    <>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className=" ">About</h2>
            <p className="just-align">
              With over two decades of expertise as a data platform architect,
              training professional, and DevOps, CloudOps, and SysOps
              specialist, I possess a proven track record in analyzing intricate
              datasets. My proficiency spans online, onsite, and corporate
              training, utilizing advanced technologies like machine learning
              algorithms and cloud computing. Throughout my career, I've
              consistently demonstrated a talent for uncovering valuable
              insights and contributing to automation and solution development,
              showcasing a commitment to making strategic, data-driven
              decisions.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <img
                style={{
                  height: 300,
                  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
                }}
                src="assets/img/medi/DSC09899.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-7 pt-4 pt-lg-0 content">
              <h3>Cloud based AI/ML &amp; Data Architecture.</h3>
              <p className="fst-italic just-align">
                Working on Multiple Clouds,AI- Artificial
                Intelligence,ML-Machine Learning, Data(RDBMS, Big Data- Spark,
                Databricks, Delta Lake) as an Architecture and also given
                laterel level trainings in these tech stacks.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Gen-AI:</strong>{" "}
                      <span>AI/ML, MLOps &amp; AIOps</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Cloud:</strong> <span> AWS, Azure, GCP</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>+91 7219851089</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Mumbai(MH), India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>BigData:</strong> <span>PySpark, Databricks</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>DevXXX:</strong>{" "}
                      <span>CloudOps, DevOps, SysOps</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>mujahed.trainer@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Mode:</strong>{" "}
                      <span>Corporate Lateral Trainer</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <p>
        Experienced corporate trainer skilled in Cloud, Big Data, and AI/ML. Successfully tackles training
        challenges, delivering comprehensive programs that empower individuals and organizations to master
        cutting-edge technologies.
        Adept at bridging knowledge gaps and fostering growth in fast-paced, dynamic environments.
      </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
}
