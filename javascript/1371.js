/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let toggle = 0;
    let max_length = 0;
    let hash = {
        0: -1
    };

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if(c === 'a'){
            toggle ^= (1 << 0);
        }else if(c === 'e'){
            toggle ^= (1 << 1);
        }else if(c === 'i'){
            toggle ^= (1 << 2);
        }else if(c === 'o'){
            toggle ^= (1 << 3);
        }else if(c === 'u'){
            toggle ^= (1 << 4);
        }


        if(toggle in hash){
            let length = i - hash[toggle];
            max_length = Math.max(max_length, length);
        }else{
            hash[toggle] = i;
        }
        
    }

    return max_length
};

console.log(findTheLongestSubstring("aasdjajafa"));