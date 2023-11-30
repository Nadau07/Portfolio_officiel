import "./styles/galeriedeprofil.css";
import portrait1 from "../../images/profil/photoportrait1.jpg"
import portrait2 from "../../images/profil/photoportrait2.jpg"
import portrait3 from "../../images/profil/portrait3.jpg"
import portrait4 from "../../images/profil/portrait4.jpg"
import Reveal from "react-reveal/Reveal";

function Galerie(){
    return(
    <> 
    <h2  className="presentation2_title">
            <Reveal>Pour me connaitre un peu plus : </Reveal>
        </h2>
      <div className="presentation2_container">
  
        <div className="presentation2_info">
            <div className="qualites">
            <h2>Om m'apprécie pour ...</h2>
            <p>Ma curiosité,</p>
            <p>Mon calme,</p>
            <p>Ma persévérance.</p>
            </div>

            <div className="passions">
                <h2>Je suis ...</h2>
            <p>Japanohile <span>(je prends des cours de langue Japonaise)</span></p>
            <p>Cynophile <span>(mon parcours académique a commencé par des études en élevage canin)</span></p>
            </div>
        </div>
        <div className="gallery">

<img src={portrait1} alt="portrait1"/>
<img src={portrait2}alt="portrait2" />
<img src={portrait3} alt="portrait3"/>
<img src={portrait4} alt="portrait4"/>
</div> 

        </div>
    </>
      
    )
}

export default Galerie