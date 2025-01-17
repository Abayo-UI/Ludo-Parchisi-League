import { FaDice} from "react-icons/fa";
import playersProfile from "./playersProfile";

export default function ViewPlayerStats({stats}){
    return(
        <div class="px-3 bg-light">
            <div class="player-profile col-lg-12 col-12 mt-2 rounded-4">
              { playersProfile.map( player => 
              stats === player.photo &&
              <div class="row height">
              <img alt="" src={`/images/${player.photo}`} class="col-lg-3 col-5 height ms-3"/>
              <div class="col-lg-5 col-6 text-light">
              <p>{player.name}</p>
              <p>Rivals: {player.rivals}</p>
              <p>Pos in last year: {player["last league position"]}/6</p>
              <p>Points deducted: {player["points deducted due to irregularities"]}</p>
              <p>Unplayed games: </p>
              </div>
              </div>
              )
              }
            </div>
        </div>
    )
}