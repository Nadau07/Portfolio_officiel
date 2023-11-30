import "./styles/header.css";
import HeaderImg from "../../images/profil/maneki-neko.jpg";
//import Competences from "./Competences";

function Header(){

    return(
    
            <div className="container_header">
                <img className="container_header_image "src={HeaderImg} alt="imageheader" />

                <div className="header_paragraphe">
                    <h1>Noah Liebert</h1>
                    <p>Intégrateur Web</p>
                </div>
        </div>
    
    
    )
}

export default Header