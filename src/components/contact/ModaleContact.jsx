import "./styles/modalContact.css";


function Modal({ isOpen, onClose }) {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal">
        <div className="modal_content">
          <h2>Message envoyé !</h2>
          <p>Votre message a été envoyé avec succès.</p>
          <button onClick={onClose} className="modal_content_button">Fermer</button>
        </div>
      </div>
    );
  }
  
  export default Modal;