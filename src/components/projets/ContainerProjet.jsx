import "./styles/containerProjet.css"
import Projet from "./Projets";
import {DataProjets} from "../../data/DataProjets";
import Jump from "react-reveal/Jump"

/**
 *
 * @returns {JSX} : Le slider des projets.
 *
 */

function ContainerProjet(props) {

  return (
    <div className="container-projet">
      <Jump>
         <h2 className="container-projet-title">Mes réalisations:</h2>
      </Jump>
     
{DataProjets.map((projet) => (
    <Projet
      key={projet.id}
      title={projet.title}
      cover={projet.cover}
      description={projet.description}
      tags={projet.tags}
      id={projet.id}   
      coverPresentation={projet.coverPresentation}
      objectif={projet.objectif}
      scenario={projet.scenario}
    />
  ))}
    </div>
  );
}

export default ContainerProjet;

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