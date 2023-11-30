import "./styles/banner.css";
import iconNavBar from "../../images/utils/bars-solid.svg";


function Banner(){
    return(
        <div className="fixed-banner">
        <div className="navbar">
        <img className="navbar-icon" src={iconNavBar} alt="menu"/>
        <div className="navbar-menu display">
            <ul>
                <li>Accueil</li>
                <li>A propos</li>
                <li>Mon parcours</li>
                <li>Mes réalisations</li>
                <li>Contact</li>
            </ul>
        </div>
        
        </div>
        </div>
   
    )
}

export default Banner
