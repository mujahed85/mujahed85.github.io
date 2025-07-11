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
      src: "assets/img/Mujahed/SelectedImages/Gallery/FinishTraining.jpg",
      width: 800,
      height: 600,
      alt: "Finish Training - Mujahed Hussaini",
    },
    {
      src: "assets/img/Mujahed/SelectedImages/Gallery/HappyFaces.jpg",
      width: 800,
      height: 600,
      alt: "Happy Faces - Mujahed Hussaini",
    },
    {
      src: "assets/img/Mujahed/SelectedImages/Gallery/IMG_20191108_173632.jpg",
      width: 800,
      height: 600,
      alt: "Event Image - Mujahed Hussaini",
    },
    {
      src: "assets/gallery-assets/img/1.jpeg",
      width: 800,
      height: 600,
      alt: "online 1",
    },
    {
      src: "assets/gallery-assets/img/2.jpeg",
      width: 800,
      height: 600,
      alt: "online 2",
    },
    {
      src: "assets/gallery-assets/img/3.jpeg",
      width: 800,
      height: 600,
      alt: "online 3",
    },
    {
      src: "assets/gallery-assets/img/4.jpeg",
      width: 800,
      height: 600,
      alt: "online 4",
    },
    {
      src: "assets/gallery-assets/img/5.jpeg",
      width: 800,
      height: 600,
      alt: "online 5",
    },
    {
      src: "assets/gallery-assets/img/6.jpeg",
      width: 800,
      height: 600,
      alt: "online 6",
    },
    {
      src: "assets/gallery-assets/img/7.jpeg",
      width: 800,
      height: 600,
      alt: "online 7",
    },
    {
      src: "assets/gallery-assets/img/8.jpeg",
      width: 800,
      height: 600,
      alt: "online 8",
    },
    {
      src: "assets/gallery-assets/img/9.jpeg",
      width: 800,
      height: 600,
      alt: "online 9",
    },
    {
      src: "assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_164930.jpg",
      width: 800,
      height: 600,
      alt: "Group Photo - Mujahed Hussaini",
    },
    {
      src: "assets/img/Mujahed/SelectedImages/Gallery/IMG_20200309_165021.jpg",
      width: 800,
      height: 600,
      alt: "Outdoor Event - Mujahed Hussaini",
    },
    {
      src: "assets/img/Mujahed/SelectedImages/Gallery/IMG_20200311_152840.jpg",
      width: 800,
      height: 600,
      alt: "Candid Shot - Mujahed Hussaini",
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

          {/* Optional hidden text slider */}
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
