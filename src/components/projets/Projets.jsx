import "./styles/projets.css";
//import FicheProjet from "./FicheProjet";


function Projet(props) {

  return (
    <figure className="card">
     
        <img src={props.cover} alt="imgCover" className="projet_image" />
        <figcaption>
  <div className="projet_info">
          <div className="projet_info_title">{props.title}</div>

        </div>
        </figcaption>
    </figure>
  );
}

export default Projet;
