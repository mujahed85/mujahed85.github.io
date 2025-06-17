export default function Footer() {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" style={{ backgroundColor: "#97BDE6" }}>
        <div className="container">
          <h3>Mujahed Hussaini</h3>
          <p>
            "Embrace the journey, celebrate the milestones, and design a legacy
            that reflects the depth of expertise woven into every system
            architecture and line of code. In the vast landscape of technology,
            let your portfolio tell the story of dedication, strategic
            innovation, and the relentless pursuit of excellence that has
            defined your career. "{" "}
          </p>
          <div className="social-links">
            {/* <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> */}
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="https://in.linkedin.com/in/mujahed-h" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>NubeEra Technologies Pvt. Ltd.</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: [license-url] */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
            Designed by <a href="#">Mujahed Hussaini</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
