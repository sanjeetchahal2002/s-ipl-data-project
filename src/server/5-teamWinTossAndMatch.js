const matchData = require('../data/matchesJson.json')

function winTossAndMatch(matchData){
    let result = {}
    matchData.forEach(element => {
           let team = element.winner
           let tossWinner = element.toss_winner
           if(!result[team] && team != ''){
                result[team] = 0 
            }
            if(team === tossWinner){
                result[team]++
            }
    });
    return result
}
winTossAndMatch(matchData)
module.exports = winTossAndMatch
