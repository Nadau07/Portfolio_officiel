import "./styles/competences.css";
import { competencesDev, competencesGeneral } from "../../data/DataCompetences";
import Bounce from "react-reveal/Bounce";
import CV from "../../images/profil/CV.pdf";

/**
 *
 * @returns {JSX} : Composant affichant la rubrique competences.
 *
 */





function Competences() {
  const competencesData = [
    ...(competencesDev || []),
    ...(competencesGeneral || []),
  ];
   

  return (
    <div className="competences_container">
      <Bounce right>
        <h2 className="competences_title">Mes compétences :</h2>
        <div className="competences">
          <div className="competences_developpement">
            <h3>Développement:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Referencement SEO</li>
            </ul>
          </div>
          <div className="competences_general">
            <h3>Général:</h3>
            <ul>
              <li>Hardware</li>
              <li>Software</li>
              <li>Gestion des droits NTFS</li>
              <li>Configuration DHCP</li>
              <li>Installation et configuration Windows Server</li>
            </ul>
          </div>
        </div>
        <div className="container_button_cv">
           <a href={CV} download="CV"><button className="buttonCV">Télécharger mon CV</button></a>
        </div>
       
      </Bounce>
      <div className="slider">
        <div className="slide-track">
          {competencesData.map((competence, index) => {
            return (
              <div className="slide" key={index}>
                <img
                  src={competence.img}
                  height="100"
                  width="250"
                  alt={`Compétence ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Competences;
