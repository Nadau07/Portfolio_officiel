import "./styles/containerProjet.css";
import Projet from "./Projets";
import { DataProjets } from "../../data/DataProjets";
import Jump from "react-reveal/Jump";

/**
 *
 * @returns {JSX} : Le composant affichant la rubrique Projets.
 *
 */

function ContainerProjet(props) {
  return (
    <>
      <Jump>
        <h2 className="container-projet-title" id="realisations">
          Mes réalisations :
        </h2>
      </Jump>
      <div className="container-projet">
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
            githubLinks={projet.githubLinks}
            pageLinks={projet.pageLinks}
          />
        ))}
      </div>
    </>
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
