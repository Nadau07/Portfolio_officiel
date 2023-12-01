import Banner from "../components/general/Banner";
import Header from "../components/general/Header";
import Presentation from "../components/profil/Presentation";
import GaleriedeProfil from "../components/profil/GaleriedeProfil";
import Parcours from "../components/parcours/Parcours"
import "./style.css";

function Home(){
    return(
        <>
        <Banner/>
        <Header/>
        <Presentation/>
        <GaleriedeProfil/>
        <Parcours/>
        </>
    )
}

export default Home