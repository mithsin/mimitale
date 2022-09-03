import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
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
          <SwiperSlide style={{width: '100px'}}>
            <WrapCont slide={slide} />
          </SwiperSlide>    
        )
      }
    </Swiper>
  );
};

export default SwipComponent;