import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const photos = [
    {
    src: "/assets/img/gallary/WhatsApp Image 2025-10-15 at 12.28.31.jpeg",  // Path to the first image you uploaded
    width: 800,
    height: 600,
    alt: "Group Photo 1",
  },
  {
    src: "/assets/img/gallary/Incedo-Gurgoan-2025-08-12-15.51.jpeg",  // Path to the second image you uploaded
    width: 800,
    height: 600,
    alt: "Incedo Gurgaon Online Training",
  },
  {
    src: "/assets/img/gallary/WhatsApp Image 2025-10-15 at 12.28.31 (1).jpeg",  // Path to the third image you uploaded
    width: 800,
    height: 600,
    alt: "Group Photo 2",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/FinishTraining.jpg",  // Path to the Finish Training image
    width: 800,
    height: 600,
    alt: "Finish Training - Mujahed Hussaini",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/HappyFaces.jpg",  // Path to the Happy Faces image
    width: 800,
    height: 600,
    alt: "Happy Faces - Mujahed Hussaini",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/IMG_20191108_173632.jpg",  // Path to the Event Image
    width: 800,
    height: 600,
    alt: "Event Image - Mujahed Hussaini",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/IMG_20200228_160535.jpg",  // Path to the Classroom Session image
    width: 800,
    height: 600,
    alt: "Classroom Session",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_164930.jpg",  // Path to the Group Photo
    width: 800,
    height: 600,
    alt: "Group Photo - Mujahed Hussaini",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_165021.jpg",  // Path to the Outdoor Event image
    width: 800,
    height: 600,
    alt: "Outdoor Event - Mujahed Hussaini",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/IMG_20200311_152840.jpg",  // Path to the Candid Shot image
    width: 800,
    height: 600,
    alt: "Candid Shot - Mujahed Hussaini",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/Job-n-Shell.jpeg",  // Path to the Job and Shell Scripting Session image
    width: 800,
    height: 600,
    alt: "Job and Shell Scripting Session",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/Students2.jpeg",  // Path to the Group of Students image
    width: 800,
    height: 600,
    alt: "Group of Students",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/StudentsGotSelected.jpg",  // Path to the Students Got Selected image
    width: 800,
    height: 600,
    alt: "Students Got Selected",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/SunbeamPracticalGiven.jpg",  // Path to the Sunbeam Practical Session image
    width: 800,
    height: 600,
    alt: "Sunbeam Practical Session",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/SunbeamTraining.jpg",  // Path to the Sunbeam Training image
    width: 800,
    height: 600,
    alt: "Sunbeam Training",
  },
  {
    src: "/assets/img/Mujahed/SelectedImages/Gallery/TeamStudentMe.jpg",  // Path to the Team and Student with Me image
    width: 800,
    height: 600,
    alt: "Team and Student with Me",
  },
  {
    src: "/assets/img/gallary/TataPower2024-08-06-8.21AM.jpeg",  // Path to the Tata Power image
    width: 800,
    height: 600,
    alt: "WhatsApp Shared Image - Aug 6, 2024",
  },
];

  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  }));

  return (
    <>
      <section id="gallery" className="hero__section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Photo Gallery</h2>
          </div>

          <div className="hero-slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="mySwiper"
            >
              {photos.map((photo, i) => (
                <SwiperSlide key={i}>
                  <button
                    className="gallery-item-link"
                    onClick={() => setIndex(i)}
                    style={{
                      cursor: "pointer",
                      padding: 0,
                      border: "none",
                      background: "none",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "500px", // ✅ set uniform height
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // ✅ ensures same visual size
                          display: "block",
                        }}
                      />
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
