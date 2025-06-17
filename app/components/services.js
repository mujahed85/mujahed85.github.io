export default function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2 className=" ">Services</h2>
            <p className="just-align">
              "With over two decades of experience as a data platform architect,
              training professional, and specialist in DevOps, CloudOps, and
              SysOps, I bring a wealth of insights to enhance your data journey.
              My services include crafting robust data architectures, providing
              advanced training sessions, and offering expertise in DevOps,
              CloudOps, and SysOps. I am dedicated to contributing to your
              success through collaborative efforts and a focus on making
              strategic, data-driven decisions. Let's embark on a journey to
              elevate your data strategies and achieve impactful results
              together."
            </p>
          </div>
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm p-3 d-flex flex-column align-items-center text-center">
                <img
                  src="assets/img/onsite.png"
                  className="card-img-top"
                  alt="On Site (Offline)"
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title mt-auto">On Site (Offline)</h4>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm p-3 d-flex flex-column align-items-center text-center">
                <img
                  src="assets/img/online.png"
                  className="card-img-top"
                  alt="Online (VILT)"
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title mt-auto">Online (VILT)</h4>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm p-3 d-flex flex-column align-items-center text-center">
                <img
                  src="assets/img/recording-camera-icon-or-video-vector-45246520.jpg"
                  className="card-img-top"
                  alt="Recording"
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title mt-auto">Recording</h4>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 shadow-sm p-3 d-flex flex-column align-items-center text-center">
                <img
                  src="assets/img/consultin.png"
                  className="card-img-top"
                  alt="Consulting"
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title mt-auto">Consulting</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </>
  );
}
