import "./styles/projets.css";
import FicheProjet from "./FicheProjet";
import{useState}from"react";
//import FicheProjet from "./FicheProjet";


function Projet(props) {
  const [showModal, setShowModal] = useState(false);

  const handleVoirPlusClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <div className="card__thumb" onClick={handleVoirPlusClick}>
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
      {showModal && (
        <div className="overlay">
          <FicheProjet
            onClose={handleCloseModal}
            title={props.title}
            description={props.description}
            tags={props.tags}
            coverPresentation={props.coverPresentation}
            objectif={props.objectif}
            scenario={props.scenario}
            githubLinks={props.githubLinks}
          />
        </div>
      )}
    </div>
  );
}

export default Projet;
