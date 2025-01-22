import Table from "./Table";
import News from "./News";
import { enterPlayersPositions } from "./playersMatchData";
import { FaTv, FaList, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import Fixtures from "./Fixtures";
import Rules from "./Rules";
import ViewPlayerStats from "./viewplayerstats";



export default function Footer(){
    const [ viewPlayerStats, setViewPlayerStats ] = useState(false);
    const [ stats, setStats ] = useState("no one");
    const [ pos, setPos ] = useState(8)
    const [ displayComponent, setDisplayComponent ] = useState({
        news: false,
        standings: true,
        fixtures: false,
        rules: false
    });
    
    function displayNewsComponent(){
        setViewPlayerStats(false);
        setDisplayComponent({
        news: true,
        standings: false,
        fixtures: false,
        rules: false
        })
    }

    function displayStandingsComponent(){
        setViewPlayerStats(false);
        setDisplayComponent({
            news: false,
            standings: true,
            fixtures: false,
            rules: false 
        })
    }

    function displayFixturesComponent(){
        setViewPlayerStats(false);
        setDisplayComponent({
            news: false,
            standings: false,
            fixtures: true,
            rules: false 
        })
    }

    function displayRulesComponent(){
        setViewPlayerStats(false);
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
           { displayComponent.standings && <Table matchesPlayed={enterPlayersPositions} viewPlayerStats={viewPlayerStats} setViewPlayerStats={setViewPlayerStats} hideStandings={setDisplayComponent} setStats={setStats} setPos={setPos} pos={pos}/>}
           { displayComponent.fixtures && <Fixtures/> }
           { displayComponent.rules && <Rules/> }
           { viewPlayerStats && <ViewPlayerStats stats={stats} pos={pos}/>}


         <div class="d-flex flex-row justify-content-around red text-light position-fixed bottom-0 w-100 icons pt-1 pb-0 footer">
           <div class={ displayComponent.news ? "active-component" : "inactive-component"}>
           <FaTv size={30} onClick={displayNewsComponent}/>
           <p class="fs-6">News</p>
           </div>

           <div class={ displayComponent.standings ? "active-component" : "inactive-component"}>
           <FaList size={30} onClick={displayStandingsComponent}/>
           <p class="fs-6">Standings</p>
           </div>

           <div class={ displayComponent.fixtures ? "active-component" : "inactive-component"}>
           <FaCalendarAlt size={30} onClick={displayFixturesComponent}/>
           <p class="fs-6">Fixtures</p>
           </div>

           <div class={ displayComponent.rules ? "active-component" : "inactive-component"}>
           <FaFileAlt size={30}  onClick={displayRulesComponent}/>
           <p class="fs-6">Rules</p>
           </div>
         </div>
        </div>
    )
}