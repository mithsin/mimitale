import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from "swiper";

export const SwipComponent = ({
  WrapCont, 
  slideList, 
  slidesPerview=5
}) => {


  return (
    <Swiper
      slidesPerView={slidesPerview}
      spaceBetween={16}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      // onSlideChange={(e) => console.log('slide change', e.target)}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        slideList.map(slide => 
          <SwiperSlide>
            <WrapCont slide={slide} />
          </SwiperSlide>    
        )
      }
    </Swiper>
  );
};

export default SwipComponent;