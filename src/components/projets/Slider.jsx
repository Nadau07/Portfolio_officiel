import "./styles/slider.css"
import { useState } from "react";
import Projet from "./Projets";
import {DataProjets} from "../../data/DataProjets";
/**
 *
 * @returns {JSX} : Le slider des projets.
 *
 */

function Slider(props){
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % DataProjets.length);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + DataProjets.length) % DataProjets.length);
  };

  return (
    <div className="sliderContainer" id="realisations">
      <h2 className="sliderContainer_title">Mes réalisations:</h2>
      {DataProjets.length > 0 && (
        <Projet
          key={DataProjets[currentIndex].id}
          title={DataProjets[currentIndex].title}
          cover={DataProjets[currentIndex].cover}
          description={DataProjets[currentIndex].description}
          tags={DataProjets[currentIndex].tags}
          id={DataProjets[currentIndex].id}
          currentIndex={currentIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
        />
      )}
    </div>
  );
}

export default Slider;