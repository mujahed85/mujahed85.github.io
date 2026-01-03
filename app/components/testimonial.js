import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    companyLogo: "assets/img/client-logo/TCS.png",
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

export default function Testimonial() {
  return (
    <section id="testimonial" className="testimonials services">
      <div className="container">
        <div className="section-header aos">
          <div className="section-sub-head feature-head text-center">
            <h2>Testimonial</h2>
            <p>
              Our students are working with companies. This partnership provides
              them with a unique opportunity to apply their skills in a
              real-world context, fostering both their academic and personal
              growth.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item card-view">
                  <div className="testimonial-img">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                  <div className="company-logo">
                    <img src={testimonial.companyLogo} alt="Company Logo" />
                  </div>
                  <p className="testimonial-quote">
                    <i className="fas fa-quote-left pe-2" />
                    {testimonial.quote}
                    <i className="fas fa-quote-right ps-2" />
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
