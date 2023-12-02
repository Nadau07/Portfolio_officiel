import "./styles/slider.css"
import Projet from "./Projets";
import {DataProjets} from "../../data/DataProjets";
import { useState } from "react";

/**
 *
 * @returns {JSX} : Le slider des projets.
 *
 */

function Slider(props) {

  return (
    <div className="slider-container">
{DataProjets.map((projet) => (
    <Projet
      key={projet.id}
      title={projet.title}
      cover={projet.cover}
      description={projet.description}
      tags={projet.tags}
      id={projet.id}   
    />
  ))}
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