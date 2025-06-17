import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const testimonials = [
  {
    name: "Ganesh V",
    role: "Data Engineer At Shell",
    image: "assets/img/user/ganish.v-removebg-preview.png",
    companyLogo: "assets/img/client-logo/shell.png",
    quote:
      "If you want to Learn DevOps, this institute offers the best resources and support. The instructors are knowledgeable, and the real-time projects were excellent.",
  },
  {
    name: "Hasnain G",
    role: "Software Engineer At TCS",
    image: "assets/img/user/husnain-g-removebg-preview.png",
    companyLogo: "assets/img/client-logo/shell.png",
    quote:
      "The DevOps Training here is incredibly thorough and helped me gain practical skills quickly. The teaching staff is excellent, and the real-time projects were very beneficial.",
  },
  {
    name: "Siddharth S",
    role: "Associate Data Engineer At Shell",
    image: "assets/img/user/sidharth-removebg-preview.png",
    companyLogo: "assets/img/client-logo/shell.png",
    quote:
      "GenAI is revolutionizing the IT industry. Learn Generative AI from experts with 20 years of corporate experience across all technologies.",
  },
  {
    name: "Ritik C",
    role: "Data Engineer At Shell",
    image: "assets/img/user/ritik-removebg-preview.png",
    companyLogo: "assets/img/client-logo/shell.png",
    quote:
      "If you want to Learn DevOps, this institute offers the best resources and support. The instructors are knowledgeable, and the real-time projects were excellent.",
  },
  {
    name: "Heena J",
    role: "Software Engineer At Incedo",
    image: "assets/img/user/heena-removebg-preview.png",
    companyLogo: "assets/img/client-logo/Incedo.png",
    quote:
      "If you want to Learn DevOps, this institute offers the best resources and support. The instructors are knowledgeable, and the real-time projects were excellent.",
  },
  {
    name: "Manav A",
    role: "Associate Data Engineer At Shell",
    image: "assets/img/user/manva-removebg-preview.png",
    companyLogo: "assets/img/client-logo/shell.png",
    quote:
      "Completing the DevOps Certification program boosted my career prospects significantly. The staff is very supportive, and the real-time projects were very helpful.",
  },
];

const carouselOptions = {
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

export default function Testimonial() {
  return (
    <>
      {/* ======= Testimonials Section ======= */}
      <section id="testimonial" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-header aos" data-aos="fade-up">
            <div className="section-sub-head feature-head text-center">
              <h2>Testimonial</h2>
              <p>
                Our students are working with companies. This partnership
                provides them with a unique opportunity to apply their skills in
                a real-world context, fostering both their academic and personal
                growth.
              </p>
            </div>

            <OwlCarousel className="owl-theme" {...carouselOptions}>
              {testimonials.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="card-view">
                    <div className="row">
                      <div className="" style={{ width: 100, height: 100 }}>
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="col-6">
                        <h4 style={{ paddingTop: 10 }}>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                      <div className="" style={{ width: 70, height: 70 }}>
                        <img src={testimonial.companyLogo} alt="Company Logo" />
                      </div>
                    </div>
                    <div className="row">
                      <p>
                        <i className="fas fa-quote-left pe-2" />
                        {testimonial.quote}
                        <i className="fas fa-quote-right pe-2" />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
    </>
  );
}
