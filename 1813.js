var areSentencesSimilar = function(sentence1, sentence2) {
    let s1_words = sentence1.split(' ');
    let s2_words = sentence2.split(' ');

    if (s1_words.length > s2_words.length) {
        [s1_words, s2_words] = [s2_words, s1_words];
    }

    let start = 0;
    let end1 = s1_words.length - 1;
    let end2 = s2_words.length - 1;

    while (start < s1_words.length && s1_words[start] === s2_words[start]) {
        start++;
    }

    while (end1 >= 0 && s1_words[end1] === s2_words[end2]) {
        end1--;
        end2--;
    }

    return end1 < start;
};


let str1 = "a A b A";
let str2 = "A";
let str_1 = "Y ggUFOmtf woKuTtO W uwJZ Zan wgm zprl Kgn mAY xLlCH phA UIVKIohfw al g m";
let str_2 = "Jfa jfvmGU bKSSX uQ AmTzbBW EF jdc ft Z g VcM oNlI jeX q mNG YnUgGSnejt Y";
console.log(areSentencesSimilar(str_1, str_2));