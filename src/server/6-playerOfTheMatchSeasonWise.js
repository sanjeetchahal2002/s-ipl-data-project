const matchData = require('../data/matchesJson.json')

function playerOftheMatch(matchData){
    let yearOutput =  {}
    matchData.forEach(element => {
            let year = element.season
            if(!yearOutput[year]){
                yearOutput[year] = []
            }
            let playerOfMatch = element.player_of_match
            if(!yearOutput[year][playerOfMatch]){
                yearOutput[year][playerOfMatch] = 1
            }else{
                yearOutput[year][playerOfMatch]++;
            }
    });
    const result = {}

    for(let years in yearOutput){
        let seasonData = yearOutput[years]
        let maxAwards = 0
        let maxPlayerWithAwards = ''
        for(let player in seasonData){
            if(seasonData[player] > maxAwards){
                maxAwards = seasonData[player]
                maxPlayerWithAwards = player
            }
        }
        result[years] = {maxPlayerWithAwards,maxAwards}
    }
    return result

}
module.exports = playerOftheMatch