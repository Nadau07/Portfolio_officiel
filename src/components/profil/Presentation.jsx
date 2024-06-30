import "./styles/presentation.css";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import ImgPortrait from "../../images/profil/photo_portfolio-fotor-bg-remover-20231108103958.webp";

/**
 *
 * @returns {JSX} : Composant affichant la rubrique A propos.
 *
 */

function Presentation() {
  return (
    <>
     <Flip right>
        <h2 className="presentation_title" id="a-propos">
        À propos :
        </h2>
      </Flip>
      <div className="presentation_container">
        <Bounce left>
          <div className="presentation_p">
            <p>
              Bonjour !<br/> Je suis Noah, j'ai 32 ans et je suis originaire du Lot-et-Garonne.
              <br />
              Je suis avant tout, un passionné d'informatique, et depuis des années, je monte, démonte, remonte des ordinateurs, bref le hardware c'est mon truc !
              <br />
              Mon aventure dans le monde de la conception web a débuté par une
              simple curiosité, à "bricoler" des lignes de code durant mon temps
              libre.
              <br />
              Cette curiosité m'a poussé à suivre une formation d'intégrateur web.
              <br />
              <br />
              Je suis convaincu que le travail occupe une place centrale dans
              nos vies. En effet, je crois profondément qu'être épanoui signifie
              consacrer son temps et son énergie à une carrière qui nous
              passionne.
              <br />
              <br />
              C'est pourquoi aujourd'hui, je m'efforce de trouver une
              entreprise qui me donnera l'opportunité de poursuivre ma carrière
              dans l'informatique. <br />
              Mon but ultime est d'atteindre une stabilité professionnelle et de
              ressentir une satisfaction quotidienne dans mon travail.
              <br />
              <br/>
              N'hésitez pas à explorer mon portfolio pour découvrir certains de
              mes projets et en apprendre d'avantage sur mon parcours et mes
              compétences.
              <br />
              <br />
              Merci de votre visite !
            </p>
          </div>
          <div className="presentation_img">
            <img
              src={ImgPortrait}
              alt="image_portrait"
              className="presentation_image"
            />
          </div>
        </Bounce>
      </div>
      <div className="profil_plus">
        <p>Je suis..</p>
        <section className="animation">
          <div className="first">
            <div>Persévérant</div>
          </div>
          <div className="second">
            <div>Patient</div>
          </div>
          <div className="third">
            <div>Curieux</div>
          </div>
        </section>
      </div>
   
    
    
    </>
     
  );
}

export default Presentation;
