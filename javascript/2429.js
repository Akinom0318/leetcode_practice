/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    function countBits(n) {
        let count = 0;
        while(n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }


    function toBinary(n) {
        let binary = '';
        while(n > 0) {
            binary = (n & 1) + binary;
            n >>= 1;
        }
        return binary;
    }

    let binary1 = toBinary(num1);
    let binary2 = toBinary(num2);
    let count1 = countBits(num1);
    let count2 = countBits(num2);
    //console.log(binary1, count1, count2);
    if(count1 === count2) {
        return num1;
    }else if(count1 > count2){
        let tmp = binary1.split('');
        let toggles = count1 - count2;
        let pointer = tmp.length - 1;
        while(toggles > 0) {
            if(tmp[pointer] === '1') {
                tmp[pointer] = '0';
                toggles--;
            }
            pointer--;
        }
        binary1 = tmp.join('');
        //console.log(binary1);
        return parseInt(binary1, 2);
    }else{
        let toggles = count2 - count1;
        if(binary2.length > binary1.length) {
            for(let i = 0; i < toggles; i++) {
                binary1 = '0' + binary1;
            }
        }

        let tmp = binary1.split('');
        let pointer = tmp.length - 1;
        while(toggles > 0) {
            if(tmp[pointer] === '0') {
                tmp[pointer] = '1';
                toggles--;
            }
            pointer--;
        }
        binary1 = tmp.join('');
        binary1 = parseInt(binary1, 2);
        return binary1;
    }

};

let num1 = 65;
let num2 = 84;
console.log(minimizeXor(num1, num2)); // 3