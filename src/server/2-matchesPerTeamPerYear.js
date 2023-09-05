function matchesPerTeamPerYear(matches) {
    let result = {}
    matches.forEach((element) => {
          let year = element.season;
          if(!result[year]){
            result[year]  = {}
          }  
          let winner = element.winner
          if(winner === ''){
            winner = 'No result'
          }
          if(!result[year][winner]){
            result[year][winner] = 1
          }else{
            result[year][winner]++
          }
    })
    return result
    
}
module.exports = matchesPerTeamPerYear