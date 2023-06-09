import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Petpedia from '../img/petpedia.png';
import Ecommerce from '../img/ecommerce.png';
import HOC from '../img/hoc.png';
import MusicApp from '../img/musicapp.png';
import 'swiper/css'
import './Portfolio.css';

const Portolio = () => {
  return (
    <div className='portfolio'>
        {/* heading */}
        <span>Proyectos recientes</span>
        <span>Portafolio</span>

        {/* Slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Petpedia} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt=""/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portolio