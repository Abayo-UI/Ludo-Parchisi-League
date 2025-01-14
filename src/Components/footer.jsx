import Table from "./Table";
import News from "./News";
import { enterPlayersPositions } from "./playersMatchData";
import { FaTv, FaList, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import Fixtures from "./Fixtures";
import Rules from "./Rules";


export default function Footer(){
    const [ displayComponent, setDisplayComponent ] = useState({
        news: false,
        standings: true,
        fixtures: false,
        rules: false
    });
    
    function displayNewsComponent(){
        setDisplayComponent({
        news: true,
        standings: false,
        fixtures: false,
        rules: false
        })
    }

    function displayStandingsComponent(){
        setDisplayComponent({
            news: false,
            standings: true,
            fixtures: false,
            rules: false 
        })
    }

    function displayFixturesComponent(){
        setDisplayComponent({
            news: false,
            standings: false,
            fixtures: true,
            rules: false 
        })
    }

    function displayRulesComponent(){
        setDisplayComponent({
            news: false,
            standings: false,
            fixtures: false,
            rules: true 
        })
    }

    return(
        <div>
           { displayComponent.news && <News/> }
           { displayComponent.standings && <Table matchesPlayed={enterPlayersPositions}/>}
           { displayComponent.fixtures && <Fixtures/> }
           { displayComponent.rules && <Rules/>}


         <div class="d-flex flex-row justify-content-around red text-light position-fixed bottom-0 w-100 icons py-1">
           <div class={ displayComponent.news ? "active-component" : "inactive-component"}>
           <p>News</p>
           <FaTv size={30} onClick={displayNewsComponent}/>
           </div>

           <div class={ displayComponent.standings ? "active-component" : "inactive-component"}>
           <p>Standings</p>
           <FaList size={30} onClick={displayStandingsComponent}/>
           </div>

           <div class={ displayComponent.fixtures ? "active-component" : "inactive-component"}>
           <p>Fixtures</p>
           <FaCalendarAlt size={30} onClick={displayFixturesComponent}/>
           </div>

           <div class={ displayComponent.rules ? "active-component" : "inactive-component"}>
           <p>Rules</p>
           <FaFileAlt size={30} onClick={displayRulesComponent}/>
           </div>
         </div>
        </div>
    )
}