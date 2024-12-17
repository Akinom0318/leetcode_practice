/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    class maxHeap {
        constructor() {
            this.heap = [];
        }

        insert(value) {
            this.heap.push(value);
            this.bubbleUp();
        }

        bubbleUp() {
            let index = this.heap.length - 1;

            while (index > 0) {
                let element = this.heap[index];
                let parentIndex = Math.floor((index - 1) / 2);
                let parent = this.heap[parentIndex];

                if (parent[0] >= element[0]) break;
                this.heap[index] = parent;
                this.heap[parentIndex] = element;
                index = parentIndex;
            }
        }

        extractMax() {
            let max = this.heap[0];
            let end = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown(0);
            }

            return max;
        }

        sinkDown(index) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;
            let length = this.heap.length;

            if (left < length && this.heap[left][0] > this.heap[largest][0]) {
                largest = left;
            }

            if (right < length && this.heap[right][0] > this.heap[largest][0]) {
                largest = right;
            }

            if (largest !== index) {
                [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
                this.sinkDown(largest);
            }
        }
    }

    let tmp_hash = {};
    let max_heap = new maxHeap();
    let new_s = "";

    for (let i = 0; i < s.length; i++) {
        if (tmp_hash[s[i]] === undefined) {
            tmp_hash[s[i]] = 1;
        } else {
            tmp_hash[s[i]]++;
        }
    }
    for (const [key, value] of Object.entries(tmp_hash)) {
        max_heap.insert([key.charCodeAt(0), value]);
    }

    while(max_heap.heap.length > 0) {
        let [charCode, count] = max_heap.extractMax();
        let char = String.fromCharCode(charCode);
        while(count > 0){
            if(count > repeatLimit){
                new_s += char.repeat(repeatLimit);
                count -= repeatLimit;
                if (max_heap.heap.length === 0) {
                    break;
                }
                let [secondChar, secondCount] = max_heap.extractMax();
                new_s += String.fromCharCode(secondChar);
                secondCount--;
                if(secondCount > 0){
                    max_heap.insert([secondChar, secondCount]);
                }
            } else {
                new_s += char.repeat(count);
                count = 0;
            }
        }
    }

    return new_s;
};

let s = "xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt";
let repeatLimit = 1;
console.log(repeatLimitedString(s, repeatLimit));
console.log("zyxyxwxwvwvuvuvututstrtrtqpqpqponononmlmkmkjigifiededededcbaba")