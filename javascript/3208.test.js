const {numberOfAlternatingGroups} = require("./3208");

test('Test case 1', () => {
    let colors = [0, 1, 0, 1, 0];
    let k = 3;
    expect(numberOfAlternatingGroups(colors, k)).toBe(3);
});

test('Test case 2', () => {
    let colors = [0,1,0,0,1,0,1];
    let k = 6;
    expect(numberOfAlternatingGroups(colors, k)).toBe(2);
});

test('Test case 3', () => {
    let colors = [1,1,0,1];
    let k = 4;
    expect(numberOfAlternatingGroups(colors, k)).toBe(0);
});