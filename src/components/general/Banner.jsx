import "./styles/banner.css";
/**
 *
 * @returns {JSX} : Composant affichant la bannière avec les liens de navigation.
 *
 */

function Banner() {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <p className="logo_p">NL</p>
      </div>

      <div className="navbar_list">
        <ul>
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#a-propos">Profil</a>
          </li>
          <li>
            <a href="#realisations">Réalisations</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
