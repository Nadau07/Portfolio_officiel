import "./styles/banner.css";
import { NavLink } from "react-router-dom";


function Banner(){
    return(
        <div className="container_navigation">
            <ul className="container_navigation_list">
                <NavLink className="decoration-none" to={`/`}> <li>Accueil</li> </NavLink>
            
                
              <NavLink className="decoration-none"  to={`/Profil`}><li>Profil</li></NavLink> 
                <li>Mon parcours</li>
                <li>Mes réalisations</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Banner