import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Table() {
    const [sortedData, setSortedData] = useState([]);

    function calculatePoints(one, two, three, four) {
        let totalOne = one * 3;
        let totalTwo = two * 2;
        let totalThree = three * 1;
        let totalFour = four * 0;
        return totalOne + totalTwo + totalThree + totalFour;
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
            <img src="/images/header design.jpg" style={{height:"30vh", width:"100vw"}}/>
            <div class="row border border-1 border-dark mt-1 ms-1">
                <div class="col-lg-1 col-1 text-secondary"><p>Pos</p></div>
                <div class="col-lg-1 col-2"><p></p></div>
                <div class="col-lg-1 col-2 text-secondary"><p>Name</p></div>
                <div class="col-lg-1 col-1 text-secondary"><p> 1</p></div>
                <div class="col-lg-1 col-1 text-secondary"><p> 2</p></div>
                <div class="col-lg-1 col-1 text-secondary"><p> 3</p></div>
                <div class="col-lg-1 col-1 text-secondary"><p> 4</p></div>
                <div class="col-lg-1 col-1" style={{fontWeight:"700"}}><p>Pts</p></div> 
                <div class="col-lg-1 col-1"></div>
            </div>

            {sortedData.map((dataItem, index) => (
                <div key={index} className="row ms-1 lower-border">
                    <div className="col-lg-1 col-1"><p>{index + 1}</p></div>
                    <div className="col-lg-1 col-2"><img src={`/images/${dataItem.image}`} className="w-50 h-50" /></div>
                    <div className="col-lg-1 col-2"><p>{dataItem.name}</p></div>
                    <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 1"]}</p></div>
                    <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 2"]}</p></div>
                    <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 3"]}</p></div>
                    <div className="col-lg-1 col-1"><p>{dataItem["no.of times pos 4"]}</p></div>
                    <div className="col-lg-1 col-1"><p style={{ fontWeight: "700" }}>{dataItem.points}</p></div>
                    <div className="col-lg-1 col-1 ps-3"><p><FaChevronDown /></p></div>
                </div>
            ))}
            <img src="/images/footer design.jpg" style={{ width: "100vw" }} />
        </div>
    );
}