import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Pagination} from 'swiper/modules'
const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={true}
      className="mySwiper"
      modules={[Navigation, Pagination,EffectFade]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="w-full h-[600px]"  src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src="https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src="https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
