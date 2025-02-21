const { FindElements, TreeNode } = require('./1261');

test('find should return true for existing elements', () => {
    const root = new TreeNode(-1, new TreeNode(-1), new TreeNode(-1));
    const findElements = new FindElements(root);
    expect(findElements.find(0)).toBe(true);
    expect(findElements.find(1)).toBe(true);
    expect(findElements.find(2)).toBe(true);
});

test('find should return false for non-existing elements', () => {
    const root = new TreeNode(-1, new TreeNode(-1), new TreeNode(-1));
    const findElements = new FindElements(root);
    expect(findElements.find(3)).toBe(false);
    expect(findElements.find(4)).toBe(false);
    expect(findElements.find(5)).toBe(false);
});