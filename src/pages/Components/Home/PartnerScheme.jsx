import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import img from '../../../assets/PartnerSchemeImg/partnerScheme.jpg';
import img1 from '../../../assets/PartnerSchemeImg/partnerScheme1.webp';
import img2 from '../../../assets/PartnerSchemeImg/partnerScheme2.jpg';

export const PartnerScheme = () => {
  return (
    <div className="partnerScheme">
        <div className="title">Partner Scheme</div>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="mySwiper"
        >

        <SwiperSlide>
            <div className="partnerSchemeCard">
                <a href="">
                    <img src={img1} alt="" />
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="partnerSchemeCard">
                <a href="">
                    <img src={img} alt="" />
                </a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="partnerSchemeCard">
                <a href="">
                    <img src={img2} alt="" />
                </a>
            </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}
