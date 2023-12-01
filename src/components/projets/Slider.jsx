import "./styles/slider.css"
import Projet from "./Projets";
import {DataProjets} from "../../data/DataProjets";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, EffectCards } from 'swiper/modules';

/**
 *
 * @returns {JSX} : Le slider des projets.
 *
 */




function Slider(props) {
  return (
    <div className="slider-container">
      <div className="heading">
        <h2 className="slider-container_title">Mes réalisations:</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true} // Active la navigation
          className="swiper_container"
        >
          {DataProjets.map((projet) => (
            <SwiperSlide key={projet.id}>
              <Projet
                title={projet.title}
                cover={projet.cover}
                description={projet.description}
                tags={projet.tags}
                id={projet.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-controler">
          {/* Les flèches de navigation automatiques générées par Swiper */}
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          {/* La pagination générée par Swiper */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

/***{DataProjets.map((projet) => (
    <Projet
      key={projet.id}
      title={projet.title}
      cover={projet.cover}
      description={projet.description}
      tags={projet.tags}
      id={projet.id}   
    />
  ))} */