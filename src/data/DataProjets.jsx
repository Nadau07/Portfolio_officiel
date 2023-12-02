import ImgProjet from "../images/projets/computer-1869306_1280.jpg";
import PresentationProjet3 from "../images/projets/presentationOhMyFood.jpg";
import Ohmyfood from "../images/projets/ohmyfoodaccueil.jpg";
import Kasa from "../images/projets/kasa.png";
import Booki from "../images/projets/booki.png";
import ArgentBank from  "../images/projets/argentBank.png";


export const DataProjets = [

    {
        id:"1",
        title:"Site Kasa",
        cover:Kasa,
        description: "Création d'une application web de location immobilière.",
        tags:["HTML", "CSS", "JavaScript", "React"]
    
    },
    {
        id:"2",
        title:"Site de MME Bluel- Architecte",
        cover:ImgProjet,
        description: "Optimisez le référencement d'un site de photographe",
        tags:["HTML", "CSS", "JavaScript"]
    
    
    },
    
    {
        id:"3",
        title:"Site Oh My Food !",
        cover:Ohmyfood,
        imagePresentation:PresentationProjet3,
        description: "Développer un site en mobile first, qui répertorie les menus de restaurants gastronomiques ",
        tags:["HTML", "CSS", "SASS"]
    
    },
    {
        id:"4",
        title:"Site BOOKI",
        cover:Booki,
        description: "Développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. ",
        tags:["HTML", "CSS"]
    },

    {
        id:"5",
        title:"Site Argent BANK",
        cover:ArgentBank,
        description: "Implémentez le front-end d'une application bancaire avec React",
        tags:["HTML", "CSS"]
    },
    {
        id:"6",
        title:"Site de l'agence 724events",
        cover:ImgProjet,
        description: "Débuggez le site d'une agence d'événementiel",
        tags:["HTML", "CSS"]
    }
    
    ]