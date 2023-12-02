import "./styles/ficheProjet.css";



function FicheProjet(props) {
  const handleCloseClick = () => {
      props.onClose();
      console.log("Fermer la modale");
    };
return (
  <div className="fiche_projet_modal">
       <button className="close_button" onClick={handleCloseClick}>
      Fermer
    </button>
    {/* Contenu de la modale */}
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.tags}</p>
    {/* Autres informations du projet */}
  </div>
);
}

export default FicheProjet;
