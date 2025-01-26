import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://i.ibb.co.com/5WXPwyz/camylla-battani-ABVE1cy-T7hk-unsplash.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://i.ibb.co.com/YR4FDbh/chuttersnap-g-DDas5-ALRw-unsplash.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://i.ibb.co.com/b1FZBfP/papaioannou-kostas-tysec-Um5-HJA-unsplash.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://www.nexea.co/wp-content/uploads/2023/04/profit_sharing_plan.webp"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src="https://st2.depositphotos.com/6741230/43512/v/450/depositphotos_435123070-stock-illustration-business-idea-concept-people-get.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
