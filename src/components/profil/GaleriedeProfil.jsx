import "./styles/galeriedeprofil.css";
import portrait1 from "../../images/profil/photoportrait1.webp";
import portrait2 from "../../images/profil/photoportrait2.webp";
import portrait3 from "../../images/profil/portrait3.webp";
import portrait4 from "../../images/profil/portrait4.webp";
import parIci from "../../images/utils/icons8-double-down.gif";
import { useState } from "react";

function GaleriedeProfil() {
  const [listVisible, setListVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);

  const toggleListVisible = () => {
    setListVisible(!listVisible);
    setArrowVisible(!arrowVisible);
  }

  const closeList = () => {
    setListVisible(false);
    setArrowVisible(true);
  }
  return (
    <div className="galerieprofil">

  
    <div className="container_gallery">
      <div className="gallery">
        <img src={portrait1} alt="portrait1" />
        <img src={portrait2} alt="portrait2" />
        <img src={portrait3} alt="portrait3" />
        <img src={portrait4} alt="portrait4" />
      </div>
    </div>



    <div className="passions">
    <h3 className="passions_title">
        Pour me connaître un peu plus...
      </h3>
      {arrowVisible && (
        <img src={parIci} className="passion_icon" alt="rubrique passion" onClick={toggleListVisible}/> 
      )}
      {!arrowVisible && (
        <img src={parIci} className="passion_icon" alt="rubrique passion" onClick={closeList}/>
      )}
      <div className={`lesplus_list ${listVisible ? 'visible' : 'hidden'}`}>
          <p>Je suis japanophile, et je prends des cours de langue Japonaise.</p>
          <p>Amoureux des animaux, ma passion réside dans le bien-être de nos compagnons à quatre pattes.</p>

        </div>
        </div>
    </div>
    
  );
}

export default GaleriedeProfil;
