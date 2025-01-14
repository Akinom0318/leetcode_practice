/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let hashA = new Map();
    let hashB = new Map();

    let res = [];
    for(let i = 0; i < A.length; i++){
        let commons = 0;
        if(hashA.has(A[i])){
            hashA.set(A[i], hashA.get(A[i]) + 1);
        }else{
            hashA.set(A[i], 1);
        }
        if(hashB.has(B[i])){
            hashB.set(B[i], hashB.get(B[i]) + 1);
        }else{
            hashB.set(B[i], 1);
        }

        if(hashA.has(A[i]) && hashB.has(A[i])){
            commons++;
        }

        if(hashA.has(B[i]) && hashB.has(B[i])){
            commons++;
        }

        if(A[i] === B[i]){
            commons--;
        }

        if(i > 0){
            res.push(commons + res[i - 1]);
        }else{
            res.push(commons);
        }
    }

    return res;
};

let A = [2,3,1];
let B = [3,1,2];
console.log(findThePrefixCommonArray(A, B)); // [1,2,3,4]