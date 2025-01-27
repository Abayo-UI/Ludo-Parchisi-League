import { fixturesData,  playedMatches }  from "./matches";
import { FaDice, FaCheck } from "react-icons/fa";

export default function Fixtures(){
    return(
        <div>
             <div class="text-light position-sticky top-0 text-center w-100 icons red">
                <h4> <FaDice size={35} />Ludo Parchisi League(LPL)</h4>
                <h5>24/25 Fixtures</h5>
            </div>
            <div class="d-flex flex-column align-items-center">
            <h4><span class="text-decoration-underline">GAMES PLAYED SO FAR:</span> { playedMatches.length }</h4>
            <h4><span class="text-decoration-underline">REMAINING GAMES:</span> { 124 - playedMatches.length }</h4>
            { fixturesData.map( (fixture, key) =>
            <div class="d-flex justify-content-between mb-1 border border-dark border-1 col-lg-6 col-11 p-2 text-center"> 
            <div class="d-flex">
            {fixture} 
            </div>
            { fixture[fixture.length-1] === "." &&
            <FaCheck style={{color:"red", fontSize:"1.5rem"}}/>}
            </div>)}
            </div>
            <div style={{height:"20vh"}}></div>
        </div>
    )
}

