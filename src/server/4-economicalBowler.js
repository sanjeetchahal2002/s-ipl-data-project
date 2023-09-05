function economicalBowler(matchData,delyData){
    let matchRequired = []
    let bowlerData = {}
    matchData.forEach( (element) => {
        let year = element.season
        let matchId = element.id
        if(year === '2015'){
            matchRequired.push(matchId)
        }
    })
    delyData.forEach( (bowls) => {  
        let matchId = bowls.match_id
        let bowler = bowls.bowler
        let runsGiven = Number(bowls.total_runs)
        if(matchRequired.includes(matchId)){
            if(!bowlerData[bowler]){
                bowlerData[bowler] = {
                    'bowls':0,
                    'runs':0,
                }
            }
            bowlerData[bowler]['runs'] +=runsGiven
            bowlerData[bowler]['bowls'] +=1
        }
    })
    let result = {}
    for(let bowler in bowlerData){
        result[bowler] =( (bowlerData[bowler].runs/bowlerData[bowler].bowls)*6).toFixed(2)  
    }
    result = Object.entries(result).sort( (a,b) => {
        return a[1]-b[1]
    }).slice(0,10)
    return result
}







module.exports = economicalBowler