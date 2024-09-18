import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='my-16'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper rounded-xl"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/Z2js6vc/slider-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/kS243PT/slide-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/Jq2G9Qc/slider-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/p4ZcPDf/slider-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/QbhhP8H/slider-5.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;