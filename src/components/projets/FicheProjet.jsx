import "./styles/ficheProjet.css";
import arrow from "../../images/utils/arrow-up-right-from-square-solid.svg";
import close from "../../images/utils/circle-xmark-regular.svg";

/**
 *
 * @returns {JSX} : Composant affichant la modale description des projets.
 *
 */

function FicheProjet(props) {
  const handleCloseClick = () => {
    props.onClose();
    console.log("Fermer la modale");
  };
  return (
    <div className="fiche_projet_modal">
      
        <img src={close} alt="fermeture" className="close_button" onClick={handleCloseClick}/>
  
      {/* Contenu de la modale */}
      <img
        className="modal_img"
        src={props.coverPresentation}
        alt="presentation"
      />
      <h2>{props.title}</h2>
      <div className="modal_info">
        <h3>Description: </h3>
        <p>{props.description}</p>
        <h3>Scénario: </h3>
        <p>{props.scenario}</p>
        <h3>Objectifs:</h3>{" "}
        <ul>
          {props.objectif.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="modal_button">
        {props.githubLinks.map((githubLink, index) => (
          <a
            key={index}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Lien GitHub
              <img src={arrow} alt="arrow" />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FicheProjet;
