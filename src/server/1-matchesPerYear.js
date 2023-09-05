const data = require('../data/matchesJson.json')

function matchesPerYear(matches){
    let output = {}
    matches.forEach((element) => {
        let year = element.season
        if(!output[year]){
            output[year] = 1
        }else{
            output[year]++;
        }
    })
    return output
}

module.exports = matchesPerYear