const { minOperations } = require('./3066');
test('minOperations example test case 1', () => {
    let nums = [1, 1, 2, 4, 9];
    let k = 20;
    expect(minOperations(nums, k)).toBe(4);
});

test('minOperations with no operations needed', () => {
    let nums = [10, 15, 20];
    let k = 5;
    expect(minOperations(nums, k)).toBe(0);
});

test('minOperations with all elements less than k', () => {
    let nums = [1, 2, 3];
    let k = 10;
    expect(minOperations(nums, k)).toBe(2);
});
