/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let players = skill.length;
    if(players === 2){
        return skill[0] * skill[1];
    }

    let sum = 0;
    let table = {};
    skill.forEach((item) => sum += item);
    let target = sum / players * 2;
    let pairs = [];


    for(const player of skill){
        if(table[target - player] !== undefined){
            pairs.push([player, table[target - player][0]]);
            table[target - player].splice(0,1);
            if(table[target - player].length === 0){
                delete table[target - player];
            } 
        }else{
            if(typeof(table[player]) !== typeof([])){
                table[player] = [];
            }
            table[player].push(player);
        }
    }
    if(Object.keys(table).length){
        return -1;
    }

    let chemistry = 0;
    pairs.forEach((item) => {
        chemistry += item[0] * item[1];
    });

    return chemistry
};

let skill = [2,4,1,3];
let skill2 = [2,3,4,2,5,5];
console.log(dividePlayers(skill2));