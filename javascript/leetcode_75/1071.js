/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let longer_str = str1.length > str2.length ? str1 : str2;
    let shorter_str = str1.length > str2.length ? str2 : str1;

    for (let i = 0; i < shorter_str.length; i++) {
        let gcd = shorter_str.slice(i, shorter_str.length);
        let repeat_gcd = gcd.repeat(longer_str.length / gcd.length);
        let repeat_gcd_origin = gcd.repeat(shorter_str.length / gcd.length);
        //console.log(gcd,repeat_gcd);
        if(repeat_gcd === longer_str && repeat_gcd_origin === shorter_str){
            return gcd;
        }
    }

    return "";
};

let str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
let str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"

console.log(gcdOfStrings(str1,str2));