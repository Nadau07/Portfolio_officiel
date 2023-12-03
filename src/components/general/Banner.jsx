import "./styles/banner.css";

function Banner() {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <p className="logo_p">NL</p>
      </div>

      <div className="navbar_list">
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réalisations</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
