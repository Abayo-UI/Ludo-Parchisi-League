import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import { FaChevronDown, FaArrowAltCircleRight, FaTimes, FaDice } from "react-icons/fa";
import { useEffect, useState } from "react";
import data from "./data";


export default function Table({matchesPlayed}) {
const [ sortedData, setSortedData ] = useState([]);
const [ moreDetails, setMoreDetails ] = useState(null);
const [ chevronUpDown, setChevronUpDown ] = useState(false);
const [ sixthPlayer, setSixthPlayer ] = useState(0);
const [ hideViewFullButton, setHideViewFullButton ] = useState(true)


function calculatePoints(one, two, three, four) {
    let totalOne = one * 3;
    let totalTwo = two * 2;
    let totalThree = three * 1;
    let totalFour = four * 0;
    
    return totalOne + totalTwo + totalThree + totalFour;
}

let index = 0;
function assignIndex(item, sortedData){
    
    if (item === 0) {
        index = item + 1;
        return index;
    } else if (sortedData[item].points === sortedData[item - 1].points) {
        index = index;
        return index;
    } else {
        index = item + 1;
        return index;
    }
}

function openChevron(id){
 setMoreDetails(id === moreDetails ? null : id);
 setChevronUpDown(!chevronUpDown);
}

function displayFullTable(){
    setSixthPlayer(6);
    setHideViewFullButton(false);
}

useEffect(() => {
    const dataWithPoints = data.map(dataItem => {
        const points = calculatePoints(dataItem["no.of times pos 1"], dataItem["no.of times pos 2"], dataItem["no.of times pos 3"], dataItem["no.of times pos 4"]);
        return { ...dataItem, points };
    });

    const sortedDataArray = dataWithPoints.sort((a, b) => b.points - a.points);
    setSortedData(sortedDataArray);
}, []);

return(  
    <div class="table-container">
        <div class=" text-light position-sticky top-0 text-center w-100 icons py-1 red">
            <h4> <FaDice size={35} />Ludo Parchisi League(LPL)</h4>
            <h5>24/25 Standings</h5>
        </div>
        <div class="row border border-1 border-dark mt-1 ps-1">
            <div class="col-lg-1 col-1 text-secondary"><p>Pos</p></div>
            <div class="col-lg-1 col-2"><p></p></div>
            <div class="col-lg-1 col-2 text-start text-secondary ps-0"><p>Name</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 1</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 2</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 3</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 4</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> MP</p></div>
            <div class="col-lg-1 col-1" style={{fontWeight:"700"}}><p>Pts</p></div> 
            <div class="col-lg-1 col-1"></div>
        </div>

        {sortedData.map((dataItem, index) => (
            (sortedData.indexOf(dataItem) <= 4 || sixthPlayer === 6 ) &&
            <div key={index} className="row ps-1 lower-border">
                <div className="col-lg-1 col-1"><p>{assignIndex(index,sortedData)}</p></div>
                <div className="col-lg-1 col-2"><img alt="" src={`/images/${dataItem.image}`} class="w-50 h-50" /></div>
                <div className="col-lg-1 col-2 text-start ps-0"><p>{dataItem.name}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 1"]}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 2"]}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 3"]}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 4"]}</p></div>
                <div className="col-lg-1 col-1"><p style={{ fontWeight: "700" }}>{matchesPlayed[dataItem.name].length}</p></div>
                <div className="col-lg-1 col-1"><p style={{ fontWeight: "700" }}>{dataItem.points}</p></div>
                <div className="col-lg-1 col-1 ps-1" onClick={()=> openChevron(index)}><p>{ chevronUpDown && index === moreDetails ? <FaTimes/> :<FaChevronDown />}</p></div>
                { moreDetails === index &&
                (<div> 
                <p>View Player Stats </p>
                </div>)
                }
                { (sortedData.indexOf(dataItem) === 4  && hideViewFullButton)&&
                <button onClick={displayFullTable} class="btn btn-light py-2 border border-dark border-1">View Full Table <FaArrowAltCircleRight size={20}/> </button>}
            </div>
        ))}
        <div class="key mb-5 ms-3 mt-2">
        
            <p id="key">KEY:</p>
            <p><strong>1:</strong> Number of times a player has become position 1 </p>
            <p><strong>2:</strong> Number of times a player has become position 2 </p>
            <p><strong>3:</strong> Number of times a player has become position 3 </p>
            <p><strong>4:</strong> Number of times a player has become position 4 </p>
            <p><strong>MP:</strong> Matches Played </p>
            <p><strong>Pts:</strong> Points </p>
        </div>
    </div>
);
}