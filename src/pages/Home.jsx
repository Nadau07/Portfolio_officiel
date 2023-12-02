import Banner from "../components/general/Banner";
import Header from "../components/general/Header";
import Presentation from "../components/profil/Presentation";
import GaleriedeProfil from "../components/profil/GaleriedeProfil";
//import Parcours from "../components/parcours/Parcours";
import ContainerProjet from "../components/projets/ContainerProjet";
import Competences from "../components/profil/Competences";
import Contact from "../components/contact/Contact";
import Footer from "../components/general/Footer";
import "./style.css";

function Home(){
    return(
        <>
        <Banner/>
        <Header/>
        <Presentation/>
        <GaleriedeProfil/>
        <Competences/>
        <ContainerProjet/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home