import "./styles/ficheProjet.css";
import arrow from "../../images/utils/arrow-up-right-from-square-solid.svg";



function FicheProjet(props) {
  const handleCloseClick = () => {
      props.onClose();
      console.log("Fermer la modale");
    };
return (
  <div className="fiche_projet_modal">
       <button className="close_button" onClick={handleCloseClick}>
      X
    </button>
    {/* Contenu de la modale */}
    <img className="modal_img"src={props.coverPresentation}alt="presentation"/>
    <h2>{props.title}</h2>
    <div className="modal_info">
    <h3>Description: </h3><p>{props.description}</p>
    <h3>Scénario: </h3><p>{props.scenario}</p>
    <h3>Objectifs:</h3> <p>{props.objectif}</p>
    </div>
    <div className="modal_button">
    <button>Lien GitHub <img src={arrow} alt="arrow"/></button>
   <button>Lien vers le site  <img src={arrow} alt="arrow"/></button>
    </div>

  </div>
);
}

export default FicheProjet;
