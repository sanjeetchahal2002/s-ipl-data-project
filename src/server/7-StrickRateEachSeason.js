const matchData = require('../data/matchesJson.json')
const delyData = require('../data/delyJson.json')
function strickRate(matchData,delyData){
    let matchRequired = {}
    let batsManData = {}
    matchData.forEach( (element) => {
        let year = element.season
        let matchId = element.id
        if(!matchRequired[year]){
            batsManData[year] = {}
            matchRequired[year] = []
        }
        matchRequired[year].push(matchId)
    })
    delyData.forEach( (bowls) => {  
        let matchId = bowls.match_id
        let batsMen = bowls.batsman
        let runsScored = Number(bowls.total_runs - bowls.extra_runs)
        
        for(let years in matchRequired){
                if(years.includes(matchId)){
                    if(!batsManData[years][batsMen]){
                        batsManData[years][batsMen] = {
                            'bowls':0,
                            'runs':0,
                        }
                    }
                    batsManData[years][batsMen]['runs'] +=runsScored
                    batsManData[years][batsMen]['bowls'] +=1
                }
        }
    })
    let result = {}
    for(let season in batsManData){
        result[season] = {}
        for(let player in batsManData[season]){
            result[season][player] =( (batsManData[season][player].runs/batsManData[season][player].bowls)*100).toFixed(2) 
        }
    }
    return result
}
strickRate(matchData,delyData)
module.exports = strickRate
