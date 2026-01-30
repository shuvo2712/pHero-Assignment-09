import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full max-h-[600px] md:max-h-[400px]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="hero min-h-[600px] md:min-h-[400px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div>
              <h1 className="text-5xl font-bold">Learn New Skills</h1>
              <p className="py-4">Upgrade yourself with experts</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="hero min-h-[600px] md:min-h-[400px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div>
              <h1 className="text-5xl font-bold">Teach What You Know</h1>
              <p className="py-4">Share skills & earn</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="hero min-h-[600px] md:min-h-[400px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div>
              <h1 className="text-5xl font-bold">Grow Together</h1>
              <p className="py-4">Community-driven learning</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
