import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import { FaChevronDown,FaTv, FaList, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import data from "./data";


export default function Table({matchesPlayed}) {
const [ sortedData, setSortedData ] = useState([]);
const [ moreDetails, setMoreDetails ] = useState(null);


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
 setMoreDetails(id === moreDetails ? null : id)
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
            <h3>LPL 24/25 Standings</h3>
        </div>
        <div class="row border border-1 border-dark mt-1 ms-1">
            <div class="col-lg-1 col-1 text-secondary"><p>Pos</p></div>
            <div class="col-lg-1 col-2"><p></p></div>
            <div class="col-lg-1 col-1 text-secondary"><p>Name</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 1</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 2</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 3</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> 4</p></div>
            <div class="col-lg-1 col-1 text-secondary"><p> MP</p></div>
            <div class="col-lg-1 col-1" style={{fontWeight:"700"}}><p>Pts</p></div> 
            <div class="col-lg-1 col-1"></div>
        </div>

        {sortedData.map((dataItem, index) => (
            <div key={index} className="row ms-1 lower-border">
                <div className="col-lg-1 col-1"><p>{assignIndex(index,sortedData)}</p></div>
                <div className="col-lg-1 col-2"><img alt="" src={`/images/${dataItem.image}`} className="w-50 h-50" /></div>
                <div className="col-lg-1 col-1"><p>{dataItem.name}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 1"]}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 2"]}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 3"]}</p></div>
                <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 4"]}</p></div>
                <div className="col-lg-1 col-1"><p style={{ fontWeight: "700" }}>{matchesPlayed[dataItem.name].length}</p></div>
                <div className="col-lg-1 col-1"><p style={{ fontWeight: "700" }}>{dataItem.points}</p></div>
                <div className="col-lg-1 col-1 ps-3" onClick={()=> openChevron(index)}><p><FaChevronDown /></p></div>
                { moreDetails === index &&
                (<div> 
                <p>View Player Stats </p>
                </div>)
                }
            </div>
        ))}
        {/*<img class="col-6" alt="header image" src="/images/header design.jpg" style={{height:"30vh"}}/>*/}
        {/*<img class="col-6" alt="footer image" src="/images/footer design.jpg"  style={{height:"30vh"}}/>*/}
        <div class="d-flex flex-row justify-content-around red text-light bottom w-100 icons py-1">
           
            <div>
            <p>News</p>
            <FaTv size={30}/>
            </div>

            <div style={{color:"#00D1F7"}}>
            <p>Standings</p>
            <FaList size={30}/>
            </div>

            <div>
            <p>Fixtures</p>
            <FaCalendarAlt size={30}/>
            </div>

            <div>
            <p>Rules</p>
            <FaFileAlt size={30}/>
            </div>
        </div>
    </div>
);
}