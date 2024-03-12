import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle"; // Import the bundle for Swiper bundle mode
import "./styles.css";
import { useEffect, useState } from "react";
 
import 'aos/dist/aos.css';
const OurAlumni = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    fetch("/alumni.json")
      .then((response) => response.json())
      .then((data) => setAlumniData(data))
      .catch((error) => console.error("Error fetching alumni data:", error));
  }, []);

  return (
    <>
      <div  className="py-8 text-bangla">
        <h2  data-aos="fade-up" className="text-center text-5xl font-bold py-4 border-b-2 ">
          আমাদের প্রাক্তন ছাত্র, আমাদের গর্ব
        </h2>
        <div className="py-4"></div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, A11y, Scrollbar]}
          className="mySwiper"
          autoplay={{
            delay: 100, // 1 second delay
            disableOnInteraction: false, // Enable autoplay even after user interactions
          }}
          loop={true}
          navigation={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 992px
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {alumniData.map((alumni) => (
            <SwiperSlide key={alumni.id}>
              <div  data-aos="zoom-in">
                <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                  <img
                    src={alumni.imageUrl}
                    alt={alumni.name}
                    className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracki">
                      {alumni.name}
                    </h2>{" "}
                    <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                      {alumni.post}
                    </span>
                  </div>
                </div>

                <img />

                <p></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OurAlumni;
