import "./styles/header.css";
import HeaderImg from "../../images/profil/maneki-neko.webp";
import iconGithub from "../../images/icons_reseaux/github.svg";
import iconLinkedIn from "../../images/icons_reseaux/linkedin.svg";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";

function Header() {

    const [isGithubHovered, setGithubHovered] = useState(false);
    const [isLinkedInHovered, setLinkedInHovered] = useState(false);
    const githubLink = 'https://github.com/Nadau07';
    const linkedinLink ='https://www.linkedin.com/in/noah-liebert-13a96229a/';

  return (
    <div className="container_header" id="accueil">
      <img
        className="container_header_image "
        src={HeaderImg}
        alt="imageheader"
      />

      <div className="header_paragraphe">
        <Zoom top>
          <h1>Noah Liebert</h1>
        </Zoom>
        <RubberBand>
            <p>Intégrateur Web</p> 
        </RubberBand>
       
        <div className="icons_reseaux">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img
              className={`icons ${isGithubHovered ? 'fa-beat' : ''}`}
              src={iconGithub}
              alt="icon_github"
              onMouseEnter={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
            />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
    <img
            className={`icons ${isLinkedInHovered ? 'fa-beat' : ''}`}
            src={iconLinkedIn}
            alt="icon_linkedIn"
            onMouseEnter={() => setLinkedInHovered(true)}
            onMouseLeave={() => setLinkedInHovered(false)}
          />

          </a>
      
        </div>
        
      </div>

</div>
  );
}

export default Header;
