/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let count = 0;
    for(const team of grid){
        let team_power = 0;
        for(const power of team){
            if(power === 1){
                team_power += 1;
                if(team_power === (team.length - 1)){
                    return count;
                }
            }
        }
        count += 1;
    }
};