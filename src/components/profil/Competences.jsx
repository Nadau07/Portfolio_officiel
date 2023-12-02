import "./styles/competences.css";
import { competencesDev, competencesGeneral } from "../../data/DataCompetences";

function Competences() {
  const competencesData = [...(competencesDev || []), ...(competencesGeneral || [])];


  return (
    <>
      <div className="slider">
        <h2 className="slider_title">Mes compétences:</h2>
        <div className="slide-track">
          {competencesData.map((competence, index) => {
            console.log('Compétence', index + 1, 'Img :', competence.img);

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
    </>
  );
}

export default Competences;
