import "../styles/parcours.css";
import {DataTimelines} from "../data/DataTimeline";
import { useState } from "react";
import Timeline from "./Timeline";
/**
 *
 * @returns {JSX} : Composant affichant la rubrique "mon parcours".
 *
 */


function Parcours({ isOpen, closeModal, props }) {

  
const [genreFilter, setGenreFilter] = useState(null);

const FilterChange = (newGenre) =>{
  setGenreFilter(newGenre);
};
  const filterTimelines = genreFilter 
  ? DataTimelines.filter((item)=> item.genre === genreFilter) : DataTimelines;
 
    return (
      <div className={`body_container modal ${isOpen ? 'open' : 'closed'}`}>
          <h2 className="container_one_title">Mon parcours:</h2>

<p className="container_one_filter">
  Filtrer par :{' '}
  <button className="container_one_filter_button" onClick={() => FilterChange(null)}>Tous</button>{' '}
  <button className="container_one_filter_button" onClick={() => FilterChange('travail')}>
  <img className="container_one_filter_button_icon"src={DataTimelines.find(item => item.genre === 'travail').cover} alt="icon-travail" />Travail</button>{' '}
  <button  className="container_one_filter_button" onClick={() => FilterChange('etude')}>
  <img className="container_one_filter_button_icon"src={DataTimelines.find(item => item.genre === 'etude').cover} alt="icon-etude" />
    Études</button>
</p>


<div className="container_one">
  {filterTimelines.map((item) => (
    <Timeline
      key={item.id}
      title={item.title}
      cover={item.cover}
      description={item.description}
      date={item.date}
      icon={item.icon}
      genre={item.genre}
    />
  ))}
</div>



        <button onClick={closeModal}>Fermer</button>
      </div>
    );
  }
export default Parcours