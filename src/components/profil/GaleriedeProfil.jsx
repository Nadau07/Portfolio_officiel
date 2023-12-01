import "./styles/galeriedeprofil.css";
import portrait1 from "../../images/profil/photoportrait1.jpg"
import portrait2 from "../../images/profil/photoportrait2.jpg"
import portrait3 from "../../images/profil/portrait3.jpg"
import portrait4 from "../../images/profil/portrait4.jpg"

function GaleriedeProfil(){
    return(
    <div className="container_gallery"> 
        <div className="gallery">

<img src={portrait1} alt="portrait1"/>
<img src={portrait2}alt="portrait2" />
<img src={portrait3} alt="portrait3"/>
<img src={portrait4} alt="portrait4"/>
</div> 

    </div>
      
    )
}

export default GaleriedeProfil