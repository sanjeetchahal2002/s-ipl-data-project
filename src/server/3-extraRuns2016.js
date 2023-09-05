function extraRun(matchesdata,delevryData){
    let result = {}
    let matchesRequired = []
    matchesdata.forEach((ele) => {
        if(ele.season === '2016'){
            matchesRequired.push(ele.id)
        }
    })
    delevryData.forEach((ele) => {
        if(matchesRequired.includes(ele.match_id)){
            let bowlingTeam = ele.bowling_team
            let extraRun = Number(ele.extra_runs)
            if(!result[bowlingTeam]){
                result[bowlingTeam] = 0
            }
            result[bowlingTeam] += extraRun     
        }
    })
    return result  
}
module.exports = extraRun