
import NinaPhotographe from "../images/projets/presentation-projets/nina_carducci_photographe.jpg"
import Ohmyfood from "../images/projets/presentation-projets/ohmyfood.png";
import Kasa from "../images/projets/presentation-projets/kasa.png";
import Booki from "../images/projets/presentation-projets/booki.png";
import ArgentBank from  "../images/projets/presentation-projets/argentBank.png";
import Events724 from "../images/projets/presentation-projets/724events.jpg"

import PresentationEvents from "../images/projets/ficheprojets/724-Events2.webp";
import PresentationArgentBank from "../images/projets/ficheprojets/argentbank.webp";
import PresentationBooki from "../images/projets/ficheprojets/booki.webp";
import PresentationKasa from "../images/projets/ficheprojets/kasa.webp";
import PresentationNina from "../images/projets/ficheprojets/Nina-Carducci2.webp";
import PresentationOhmyFood from "../images/projets/ficheprojets/ohmyfood.webp";

export const DataProjets = [

    {
        id:"1",
        title:"Site Kasa",
        cover:PresentationKasa,
        coverPresentation:Kasa,
        description: "Création d'une application web de location immobilière.",
        scenario: "La CTO de l'agence Kasa, a demandée une refonte totale du site, en JavaScript, avec React coté front-end.",
        objectif: ["Mettre en œuvre des animations CSS","Développer une interface Web avec SASS", "Configurer la navigation entre les pages de l'application avec React Router."],
        tags:["HTML", "SASS", "JavaScript", "React"]
    
    },
    {
        id:"2",
        title:"Site de MME Carducci",
        cover:PresentationNina,
        coverPresentation:NinaPhotographe,
        description: "Optimisez le référencement d'un site de photographe.",
        scenario: "Je propose à MME Carducci, d'optimiser son site au niveau des images, et du code . Grâce à cela, son site ne sera plus long au chargement,et elle gagnera en visibilité car elle aura un meilleur référencement (SEO).",
        objectif: ["Amélioration du chargement et de l'accessibilité du site", "Mise  en place du référencement local et SEO."],
        tags:["SEO", "CSS", "JavaScript"]
    
    
    },
    
    {
        id:"3",
        title:"Site Oh My Food !",
        cover:PresentationOhmyFood,
        coverPresentation:Ohmyfood,
        description: " Améliorer l'interface d'un site mobile avec des animations CSS.",
        scenario:"On m'a demandé de développer un site en mobile first, qui répertorie les menus de restaurants gastronomiques",
        objectif:["Intégrer une maquette en mobile-first", "Mettre en œuvre des animation CSS "],
        tags:["HTML","SASS"]
    
    },
    {
        id:"4",
        title:"Site BOOKI",
        cover:PresentationBooki,
        coverPresentation:Booki,
        description: "Développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. ",
        scenario:"La start-up Booki me contacte pour développer leurs site internet en respectant les differentes maquettes de Loïc, l'UI designer.",
        objectif:["Implémenter une interface responsive avec HTML et CSS"],
        tags:["HTML", "CSS"]
    },

    {
        id:"5",
        title:"Site Argent BANK",
        cover:PresentationArgentBank,
        coverPresentation: ArgentBank,
        description: "Implémentez le front-end d'une application bancaire avec React",
        scenario:"Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire, Milla, la chefe de projet, me demande de creer l'application web complète et responsive avec React. Elle me demande aussi d'utiliser Redux pour gérer le state de l'ensemble de l'application.",
        objectif:["Afficher les données du back end sur l'interface via des Appel API","Configurer des routes API pour la communication client/serveur", "Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front."],
        tags:["HTML", "CSS", "JavaScript", "React", "Redux"]
    },
    {
        id:"6",
        title:"Site de l'agence 724events",
        cover:PresentationEvents,
        coverPresentation:Events724,
        description: "Débuggez le site d'une agence d'événementiel",
        scenario:"L'agence 724Events me contacte pour une mission: elle souhaite publier la nouvelle version de son site vitrine, mais malheureusement l'ancien développeur a dû abandonner le projets pour des raisons personnelles. Le site est fonctionnel, mais quelques bugs entravent lebon usage des visiteurs, il compte donc sur moi pour finaliser le travail. ",
         objectif:["Débugger un site web grâce aux Chromes DevTools", "Mise en place de test", "Rédaction d'un cahier de recette pour tester un site"],
        tags:["HTML", "CSS", "JavaScript", "Jest"]
    }
    
    ]