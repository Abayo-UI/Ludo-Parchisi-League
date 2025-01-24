import fixturesData from "./matches";
import { FaDice } from "react-icons/fa";
export default function Fixtures(){
    return(
        <div>
             <div class="text-light position-sticky top-0 text-center w-100 icons red">
                <h4> <FaDice size={35} />Ludo Parchisi League(LPL)</h4>
                <h5>24/25 Fixtures</h5>
            </div>
            <div class="d-flex flex-column align-items-center">
            { fixturesData.map( (fixture, key) =>
            
            <div class="d-flex mb-1 border border-dark border-1 col-lg-6 col-11 p-2 text-center"> 
            <p class="me-3"> {key + 1})</p>
            {fixture} 
            </div>)}
            </div>
            <div style={{height:"20vh"}}></div>
        </div>
    )
}

