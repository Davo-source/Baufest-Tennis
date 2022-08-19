import { useContext } from "react";
import PlayersSingleton from "../../Services/Players/playerContext";


export default ()=> useContext(PlayersSingleton);