
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from "../assets/banner/banner1.jpg"
import banner2 from "../assets/banner/banner2.jpg"
import banner3 from "../assets/banner/banner3.jpg"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='rounded-xl shadow-lg' src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl shadow-lg' src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl shadow-lg' src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl shadow-lg' src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl shadow-lg' src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded-xl shadow-lg' src={banner3} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
