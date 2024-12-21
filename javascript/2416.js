/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    class trie_node{
        constructor(){
            this.children = {};
            this.prefix_count = 0;
        }
    }

    class trie{
        constructor(){
            this.root = new trie_node();
        }

        InsertCharacter(word){
            let current_node = this.root;
            for (let char of word) {
                if (!current_node.children[char]) {
                    current_node.children[char] = new trie_node();
                }
                current_node = current_node.children[char];
                current_node.prefix_count++;
            }
        }


        NodeChildrenCount(word){
            let current_node = this.root;
            let score = 0;
            for (let char of word) {
                current_node = current_node.children[char];
                score += current_node.prefix_count;
            }
            return score;
        }
    }

    //initiation
    const prefix_trie = new trie();
    for(const word of words){
        prefix_trie.InsertCharacter(word);
    }


    let result = [];
    
    for (let word of words) {
        result.push(prefix_trie.NodeChildrenCount(word));
    }
    return result;
};

let words = ["apple","apple","ape"];

console.log(sumPrefixScores(words));