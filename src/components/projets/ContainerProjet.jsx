import "./styles/containerProjet.css"
import Projet from "./Projets";
import {DataProjets} from "../../data/DataProjets";

/**
 *
 * @returns {JSX} : Le slider des projets.
 *
 */

function ContainerProjet(props) {

  return (
    <div className="container-projet">
      <h2 className="container-projet-title">Mes réalisations:</h2>
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