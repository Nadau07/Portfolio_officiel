import "./styles/parcours.css";
import { Chrono } from "react-chrono";
import { DataTimelines } from "../../data/DataTimeline";
//import Timeline from "../parcours/Timeline";
/**
 *
 * @returns {JSX} : Composant affichant la rubrique "mon parcours".
 *
 */

function Parcours() {
  return (
    <div className="container_parcours">
      <h2>Mon parcours:</h2>
      <div className="timeline">
        <Chrono
          items={DataTimelines}
          mode="VERTICAL"
          theme={{
            primary: "red",
            secondary: "white",
            cardBgColor: "white",
            titleColor: "black",
            titleColorActive: "red",
          }}
        />
      </div>
    </div>
  );
}
export default Parcours;
