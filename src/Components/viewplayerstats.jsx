import playersProfile from "./playersProfile";
import data from "./data";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

function PlayersPointsVisualization({id}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = d3.select(containerRef.current);
        const noOfTimesArray = ["number of times pos 1", "number of times pos 2", "number of times pos 3", "number of times pos 4"];
        const w = 280;
        const h = 350;
        const xpadding = 29;
        const ypadding = 100

        container.append("svg")
                 .attr("width", w)
                 .attr("height", h);
        
        const xScale = d3.scaleBand()
                 .domain( noOfTimesArray.map( item => item))
                 .range([0, w]);
        
        const xAxis = d3.axisBottom(xScale);
        
                  d3.select("svg")
                    .append("g")
                    .attr("transform", `translate(${xpadding}, ${h - ypadding})`)
                    .call(xAxis)
                    .attr("text-anchor","end")
                    .selectAll("text")
                    .attr("transform", "rotate(-45)")
                    .attr("y","10")
                    .attr("x","-10");

        const yScale = d3.scaleLinear()
                         .domain([0,40])
                         .range([h-ypadding, 10]);

        const yAxis = d3.axisLeft(yScale);
                      d3.select("svg")
                        .append("g")
                        .attr("transform", `translate(${xpadding}, 0)`)
                        .call(yAxis);

        data.map( (item)=> {
            ( id === item.id ) && 
            d3.select("svg")
              .append("rect")
              .attr("height", h - ypadding - yScale(item["no.of times pos 1"]))
              .attr("width", 40)
              .attr("x", xScale(noOfTimesArray[0]) + xpadding)
              .attr("y", yScale(item["no.of times pos 1"]))
              .attr("fill", "red");

            d3.select("svg")
              .append("rect")
              .attr("height", h - ypadding - yScale(item["no.of times pos 2"]))
              .attr("width", 40)
              .attr("x", xScale(noOfTimesArray[1]) + xpadding)
              .attr("y", yScale(item["no.of times pos 2"]))
              .attr("fill", "yellow");

            d3.select("svg")
              .append("rect")
              .attr("height", h - ypadding - yScale(item["no.of times pos 3"]))
              .attr("width", 40)
              .attr("x", xScale(noOfTimesArray[2]) + xpadding)
              .attr("y", yScale(item["no.of times pos 3"]))
              .attr("fill", "green");

            d3.select("svg")
              .append("rect")
              .attr("height", h - ypadding - yScale(item["no.of times pos 4"]))
              .attr("width", 40)
              .attr("x", xScale(noOfTimesArray[3]) + xpadding)
              .attr("y", yScale(item["no.of times pos 4"]))
              .attr("fill", "blue");
        })
        
                       

        return () => {
            container.selectAll("*").remove(); // Clean up D3 elements on unmount
        };
    }, []);

    return <div ref={containerRef} id="data-visualization-container" class="d-flex justify-content-center"></div>;
}

export default function ViewPlayerStats({stats, pos}){
    return(
        <div class="px-3 bg-light">
            <div>
              { playersProfile.map( player => 
              stats === player.photo &&
              <div>
              <div class="row height player-profile col-lg-12 col-12 mt-2 rounded-4">
              
              <img alt="" src={`/images/${player.photo}`} class="col-lg-3 col-5  ms-2"/>
              <div class="col-lg-5 col-7 text-light details">
              <p><strong class="text-dark text-decoration-underline">{player.name.toUpperCase()}</strong></p>
              <p class="profile-details"><strong class="text-dark">Rivals: </strong>{player.rivals.map( rival => rival + " ")}</p>
              <p class="profile-details2"><strong class="text-dark">Pos last year: </strong> <span class="fs-1">{player["last league position"]}</span>/6</p>
              <p class="profile-details2"><strong class="text-dark">Current Pos: </strong> <span class="fs-1">{pos}</span>/7</p>
              <p class="profile-details"><strong class="text-dark">Points deducted: </strong> {player["points deducted due to irregularities"]}</p>
              <p class="profile-details"><strong class="text-dark">Unplayed games: </strong></p>
              </div>
              </div>

              <h3 class="text-decoration-underline mt-2 text-center">{player.name.toUpperCase()}'S LPL POINTS DISTRIBUTION ANALYSIS</h3>
              <PlayersPointsVisualization id={player.id}/>
              <div style={{height:"20vh"}}></div>
              </div>
              )
              }
            </div>
        </div>
    )
}