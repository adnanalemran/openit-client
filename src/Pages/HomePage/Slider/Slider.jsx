import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    // Assuming slider.json is in the public folder
    fetch("/sliderData.json")
      .then((response) => response.json())
      .then((data) => setSliderData(data))
      .catch((error) => console.error("Error fetching slider data:", error));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {sliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            data-aos="zoom-in"
            className="hero min-h-[600px]"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div
              data-aos="fade-up"
              className="hero-content text-center text-neutral-content text-bangla"
            >
              <div className="max-w-xl">
                <h1
                  data-aos="fade-right"
                  className="mb-5 text-5xl font-bold indent-3 leading-relaxed"
                >
                  " {slide.text} "
                </h1>
                <p data-aos="fade-left" className="mb-5">
                  {slide.subText}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
