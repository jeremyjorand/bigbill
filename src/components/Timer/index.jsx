import STimer from "./style";
import StatsContext from "../../services/contexts/index";
import { useContext } from "react";
import timerPicture from "@assets/timer.png";

export default function Timer() {
  const { timer, timerActive, annualProfit } = useContext(StatsContext);
  return (
    <STimer>
      <div className="timer">
        <img src={timerPicture} />

        <p>Année : {timer}</p>
        <p>Bénéfices par an : {annualProfit}€</p>
      </div>
    </STimer>
  );
}
