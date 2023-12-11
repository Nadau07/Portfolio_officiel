import "./styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import Modal from "./ModaleContact";
import Roll from "react-reveal/Roll";
/**
 *
 * @returns {JSX} : Composant affichant le formulaire de contact.
 *
 */
// ...

const Contact = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.user_name.value.trim()) {
      setNameError('Veuillez saisir votre nom.');
      return;
    }

    if (!form.current.user_email.value.trim()) {
      setEmailError('Veuillez saisir votre e-mail.');
      return;
    }

    setNameError('');
    setEmailError('');

    emailjs
      .sendForm(
        "service_xm6lihn",
        "template_89ggoqo",
        form.current,
        "5QsWqZl8s60rjgezE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message envoyé !");
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    setNameError('');
    setEmailError('');
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="body_container_contact">
      <Roll left>
        <h2 className="body_container_contact_title" id="contact">
          Mon profil vous intéresse ? <br />
          Contactez-moi !{" "}
        </h2>
      </Roll>
      <form
        className="body_container_contact_form"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className={`form-group ${nameError ? 'has-error' : ''}`}>
          <label htmlFor="name">Votre nom :</label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="body_container_contact_form_input"
          />
          <p className="error-message">{nameError}</p>
        </div>
        <div className={`form-group ${emailError ? 'has-error' : ''}`}>
          <label htmlFor="email">Votre email :</label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="body_container_contact_form_input"
          />
          <p className="error-message">{emailError}</p>
        </div>

        <div>
          <label htmlFor="message">Votre message :</label>
          <textarea
            id="message"
            name="message"
            className="body_container_contact_form_input_message"
          />
        </div>
        <div className="body_container_contact_button">
          <button
            type="submit"
            value="Send"
            className="body_container_contact_form_button"
          >
            ENVOYER
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Contact;
