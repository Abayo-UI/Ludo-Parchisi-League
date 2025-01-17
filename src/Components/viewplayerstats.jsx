import { FaDice} from "react-icons/fa";
import playersProfile from "./playersProfile";

export default function ViewPlayerStats({stats}){
    return(
        <div class="px-3 bg-light">
            <div class="player-profile col-lg-12 col-12 mt-2 rounded-4">
              { playersProfile.map( player => 
              stats === player.photo &&
              <div class="row height">
              
              <img alt="" src={`/images/${player.photo}`} class="col-lg-3 col-4 height ms-3"/>
              <div class="col-lg-5 col-7 text-light height">
              <p><strong class="text-dark text-decoration-underline">{player.name.toUpperCase()}</strong></p>
              <p class="profile-details"><strong class="text-dark">Rivals:</strong>{player.rivals.map( rival => rival + " ")}</p>
              <p class="profile-details"><strong class="text-dark">Pos last year:</strong> {player["last league position"]}/6</p>
              <p class="profile-details"><strong class="text-dark">Points deducted:</strong> {player["points deducted due to irregularities"]}</p>
              <p class="profile-details"><strong class="text-dark">Unplayed games: </strong></p>
              </div>
              </div>
              )
              }
            </div>
        </div>
    )
}