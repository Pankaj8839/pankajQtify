import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import { ReactComponent as Right } from "../../assets/right.svg"; 
import { ReactComponent as Left } from "../../assets/left.svg";

export const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => swiper.off("slideChange", handleSlideChange);
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <Left onClick={() => swiper.slideNext()} />} 
    </div>
  );
};

export const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => swiper.off("slideChange", handleSlideChange); 
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <Right onClick={() => swiper.slidePrev()} />}  
    </div>
  );
};
