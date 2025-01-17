import { FaDice} from "react-icons/fa";
import playersProfile from "./playersProfile";

export default function ViewPlayerStats({stats}){
    return(
        <div class="px-4 bg-light">
            <div class="player-profile col-lg-12 col-11 mt-2 rounded-4 pe-1">
              { playersProfile.map( player => 
              stats === player.photo &&
              <img alt="" src={`/images/${player.photo}`} class="w-25 ms-4"/>
              )
              }
            </div>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>
            <p>These are the player stats</p>

        </div>
    )
}