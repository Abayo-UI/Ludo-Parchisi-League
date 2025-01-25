import data from "./data";

export const  enterPlayersPositions = {
    "Donald": [ 3,3,2,3],
    "Kamar": [ 1,3,4],
    "Mokaya": [ 2,4,1,3],
    "Leslie": [ 1,4,1],
    "Rony": [ 2,2,1,4],
    "Stanley": [ 4,3,1,2],
    "Tony": [ 4,2]
}

function insertNumberOftTimesOfEachPosition(dataItem) {
    for (let name in enterPlayersPositions) {
        if (dataItem.name === name) {
            let onesArray = enterPlayersPositions[name].filter(item => item === 1);
            let twosArray = enterPlayersPositions[name].filter(item => item === 2);
            let threesArray = enterPlayersPositions[name].filter(item => item === 3);
            let foursArray = enterPlayersPositions[name].filter(item => item === 4);

            let TotalOfOne = onesArray.length;
            let TotalOfTwo = twosArray.length;
            let TotalOfThree = threesArray.length;
            let TotalOfFour = foursArray.length;

            dataItem["no.of times pos 1"] = TotalOfOne;
            dataItem["no.of times pos 2"] = TotalOfTwo;
            dataItem["no.of times pos 3"] = TotalOfThree;
            dataItem["no.of times pos 4"] = TotalOfFour;
        }
    }
}

data.map(dataItem => insertNumberOftTimesOfEachPosition(dataItem));