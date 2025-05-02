/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let dp = new Array(dominoes.length).fill(0);
    let maxForce = dominoes.length;

    let ans = "";

    let currForce = 0;
    for(let i = 0; i < dominoes.length; i++){
        if(dominoes[i] === "R"){
            currForce = maxForce;
        }else if(dominoes[i] === "L"){
            currForce = 0;
        }else{
            currForce += currForce > 0 ? -1 : 0;
        }

        dp[i] += currForce;
    }

    currForce = 0;
    for(let i = dominoes.length - 1; i >= 0; i--){
        if(dominoes[i] === "L"){
            currForce = -maxForce;
        }else if(dominoes[i] === "R"){
            currForce = 0;
        }else{
            currForce += currForce < 0 ? 1 : 0;
        }

        dp[i] += currForce;
    }


    ans = dp.map((force) => {
        if(force > 0) return "R";
        if(force < 0) return "L";
        return ".";
    }).join("");


    return ans;
};

let dominoes = ".L.R...LR..L..";
console.log(pushDominoes(dominoes)); // "LL.RR.LLRRLL.."