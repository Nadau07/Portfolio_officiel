import "./styles/header.css";
import HeaderImg from "../../images/profil/maneki-neko.jpg";
import iconGithub from "../../images/icons_reseaux/github.svg";
import iconLinkedIn from "../../images/icons_reseaux/linkedin.svg";
import RubberBand from "react-reveal/RubberBand";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";

function Header() {

    const [isGithubHovered, setGithubHovered] = useState(false);
    const [isLinkedInHovered, setLinkedInHovered] = useState(false);

  return (
    <div className="container_header">
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
        <img
            className={`icons ${isGithubHovered ? 'fa-beat' : ''}`}
            src={iconGithub}
            alt="icon_github"
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
          />
          <img
            className={`icons ${isLinkedInHovered ? 'fa-beat' : ''}`}
            src={iconLinkedIn}
            alt="icon_linkedIn"
            onMouseEnter={() => setLinkedInHovered(true)}
            onMouseLeave={() => setLinkedInHovered(false)}
          />
        </div>
        
      </div>
      <div class="scroll-downs">
  <div class="mousey">
    <div class="scroller"></div>
  </div>
</div>
    </div>
  );
}

export default Header;
