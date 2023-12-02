import "./styles/projets.css";

//import FicheProjet from "./FicheProjet";


function Projet(props) {

  return (
    <div className="card">
      <div className="card__thumb">
        <img src={props.cover} alt="imgCover" className="card_image" />
      </div>
      <div className="card__body">
        <div className="card__title">{props.title}</div>
        <div className="card_tags">
          {props.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projet;
