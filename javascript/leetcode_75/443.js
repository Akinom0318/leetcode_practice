/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = 0;
    let origin_index = 0;
    let current_c = chars[0];
    let current_c_count = 0;
    let str_count = String(current_c_count);
    for (let i = 0; i < chars.length; i++){
        const c = chars[i];
        if(c !== current_c){
            chars[origin_index ++] = current_c;
            count ++;
            if(current_c_count > 1){
                str_count = String(current_c_count);
                for (let i = 0; i < str_count.length; i++) {
                    count ++;
                    chars[origin_index ++] = str_count[i];
                }
            }

            current_c_count = 0;
        }
        current_c = c;
        current_c_count ++;
    }
    chars[origin_index ++] = current_c;
    count ++;

    if(current_c_count > 1){
        str_count = String(current_c_count);
        for (let i = 0; i < str_count.length; i++) {
            chars[origin_index ++] = str_count[i];
            count ++;
        }
    }

    chars.splice(count,chars.length - count);

    return chars.length;
};

let chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars));
console.log(chars);