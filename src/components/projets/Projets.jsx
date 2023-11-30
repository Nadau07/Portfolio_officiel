import "./styles/projets.css";
import FicheProjet from "./FicheProjet";
import { useState } from "react";

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
      <div className="side side--front">
        <img src={props.cover} alt="imgCover" className="projet_image" />
      </div>

      <div className="side side--back">
        
        <div className="projet_info">
          <div className="projet_info_title">{props.title}</div>
          <div className="projet_info_description">{props.description}</div>
          <div className="projet_info_tags">{props.tags}</div>
          <button className="projet_info_button" onClick={handleVoirPlusClick}>
            Voir plus
          </button>
        </div>
      </div>

      {showModal && (
        <FicheProjet
          onClose={handleCloseModal}
          title={props.title}
          description={props.description}
          tags={props.tags}
        />
      )}
    </div>
  );
}

export default Projet;
