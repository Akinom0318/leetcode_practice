var maximumLength = function(s) {
    const count = new Map();

    for (let start = 0; start < s.length; start++) {
        const character = s[start];
        let substringLength = 0;

        for (let end = start; end < s.length; end++) {
            if (character === s[end]) {
                substringLength++;
                const key = `${character}-${substringLength}`;
                count.set(key, (count.get(key) || 0) + 1);
            } else {
                break;
            }
        }
    }

    let ans = 0;

    for (const [key, freq] of count.entries()) {
        const length = parseInt(key.split('-')[1]);
        if (freq >= 3 && length > ans) {
            ans = length;
        }
    }

    return ans === 0 ? -1 : ans;
};
