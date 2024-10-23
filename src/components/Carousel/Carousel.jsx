import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import SongCard from '../Card/Card';
import style from "./Carousel.module.css";
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {CarouselRightNavigation, CarouselLeftNavigation} from "./CarouselRightNavigation";



import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';




const Carousel = ({ items,displayLikes }) => {

  return (
   
     <Swiper
     slidesPerView={7}
     onSlideChange={() => console.log('slide change')}
     onSwiper={(swiper) => console.log(swiper)}
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     navigation={false}
     spaceBetween={20}
     className={style.swiper}
    >
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
     {items.map((item) => (
          <SwiperSlide key={item.id} >
            <SongCard image={item.image} numberOfFollowers={item.follows} albumName={item.title} displayLikes={displayLikes ? true : false} numberOfLikes={item.likes}/>
          </SwiperSlide>
        ))}
   </Swiper>
  );

};

export default Carousel;
