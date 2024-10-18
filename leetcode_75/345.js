/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let tmp = s.split('');
    let vowel = [];
    for (let i = 0; i < tmp.length; i++) {
        const c = tmp[i];
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U'){
            vowel.push(c);
            tmp.splice(i,1,'+');
        }else{
            continue;
        }
    }

    let count = 0;
    vowel.reverse();
    for (let i = 0; i < tmp.length; i++) {
        const c = tmp[i];
        if(c === '+'){
            tmp.splice(i,1,vowel[count ++]);
        }
    }

    return tmp.join('');
};


let s = "IceCreAm";
console.log(reverseVowels(s));