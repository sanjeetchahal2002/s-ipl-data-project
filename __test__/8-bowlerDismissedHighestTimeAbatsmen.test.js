const findMaxDismissals = require("../src/server/8-bowlerDismissedHighestTimeAbatsmen");

const sampleDeliveries = [
  { player_dismissed: "GJ Maxwell", bowler: "Rashid Khan" },
  { player_dismissed: "GJ Maxwell", bowler: "BA Stokes" },
  { player_dismissed: "KA Pollard", bowler: "Rashid Khan" },
  { player_dismissed: "KA Pollard", bowler: "BA Stokes" },
  { player_dismissed: "KA Pollard", bowler: "Rashid Khan" },
  { player_dismissed: "CH Gayle", bowler: "BA Stokes" },
];

test("find player with the most dismissals", () => {
  expect(findMaxDismissals( sampleDeliveries)).toMatchObject({
     maxbowler: 'Rashid Khan', maxbatsman: 'KA Pollard', 'number of times': 2 
    });
});

