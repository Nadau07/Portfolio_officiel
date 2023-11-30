import "./styles/presentation.css";
import ImgPortrait from "../../images/profil/photo_portfolio-fotor-bg-remover-2023110810410.png";

function Presentation(){
    return(
<div className="presentation_container">
              <div className="presentation_img">
              <img src={ImgPortrait} alt="portrait" className="presentation_image" />
          </div>
          <p className="presentation_p">
            Je suis Noah, originaire de Lot-et-Garonne, et âgé de 32 ans.
            <br />
            Mon aventure dans le monde de la conception web a débuté par une
            simple curiosité, à "bricoler" des lignes de code durant mon temps
            libre.
            <br />
            <br />
            Cette passion m'a poussé à suivre une formation d'intégrateur web,
            où j'ai acquis des compétences solides en matière de conception et
            de développement web.
            <br />
            Cependant, je considère que cette formation n'est que le début de
            mon parcours, car ma soif d'apprendre est insatiable.
            <br />
            <br />
            Je suis convaincu que le travail occupe une place centrale dans nos
            vies, et je crois profondément qu'être épanoui signifie consacrer
            son temps et son énergie à une carrière qui nous passionne.
            <br />
            <br />
            C'est pourquoi, aujourd'hui, je m'efforce de trouver une entreprise
            qui me donnera l'opportunité de poursuivre ma carrière dans le
            développement web. <br />
            Mon but ultime est d'atteindre une stabilité professionnelle et de
            ressentir une satisfaction quotidienne dans mon travail.
            <br />
            Je suis convaincu que le bonheur au travail est la clé d'une vie
            épanouie dans son ensemble.
            <br />
            <br />
            N'hésitez pas à explorer mon portfolio pour découvrir certains de
            mes projets et en apprendre davantage sur mon parcours et mes
            compétences.
            <br />
            Merci de votre visite !
          </p>  
     
        
          </div>
    )
}

export default Presentation