import Script from "next/script";

export default function Gallery() {
  return (
    <>
      <section id="gallery" className="hero__section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="">Photo Gallery</h2>
          </div>
          <div className="hero-slider">
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/FinishTraining.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/FinishTraining.jpg"
                  className=""
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/HappyFaces.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/HappyFaces.jpg"
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/IMG_20191108_173632.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/IMG_20191108_173632.jpg"
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200228_160535.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200228_160535.jpg"
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_164930.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_164930.jpg"
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_165021.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_165021.jpg"
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
            <div className="slide-item">
              <a
                className="fresco"
                href="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200311_152840.jpg"
                data-fresco-group="projects"
              >
                <img
                  src="assets/img/Mujahed/SelectedImages/Gallery/IMG_20200311_152840.jpg"
                  alt="Mujahed Hussaini"
                />
              </a>
            </div>
          </div>
          <div style={{ display: "none" }} className="hero-text-slider">
            <div className="text-item">
              <h2>Nature</h2>
              <p>Photography</p>
            </div>
            <div className="text-item">
              <h2>Red Heartbeat</h2>
              <p>Photography</p>
            </div>
            <div className="text-item">
              <h2>Blue Dreem</h2>
              <p>Photography</p>
            </div>
            <div className="text-item">
              <h2>Christian Church</h2>
              <p>Photography</p>
            </div>
            <div className="text-item">
              <h2>Red Darkness</h2>
              <p>Photography</p>
            </div>
            <div className="text-item">
              <h2>Beauty with Brain</h2>
              <p>Photography</p>
            </div>
            <div className="text-item">
              <h2>Remarkable</h2>
              <p>Photography</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
