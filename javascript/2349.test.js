const NumberContainers = require('./2349');

test('find method should return -1 for non-existing number', () => {
    const numberContainers = new NumberContainers();
    expect(numberContainers.find(10)).toBe(-1);
});

test('change method should update the index and find method should return the correct index', () => {
    const numberContainers = new NumberContainers();
    numberContainers.change(2, 10);
    expect(numberContainers.find(10)).toBe(2);
});

test('change method should update the index and find method should return the smallest index', () => {
    const numberContainers = new NumberContainers();
    numberContainers.change(2, 10);
    numberContainers.change(3, 10);
    expect(numberContainers.find(10)).toBe(2);
    numberContainers.change(2, 20);
    expect(numberContainers.find(10)).toBe(3);
});

//more tests
test('find method should return the smallest index for the number', () => {
    const numberContainers = new NumberContainers();
    numberContainers.change(2, 10);
    numberContainers.change(3, 10);
    numberContainers.change(1, 10);
    expect(numberContainers.find(10)).toBe(1);
});

test('find method should return the smallest index for the number', () => {
    const numberContainers = new NumberContainers();
    numberContainers.change(2, 10);
    numberContainers.change(3, 10);
    numberContainers.change(1, 10);
    numberContainers.change(1, 20);
    expect(numberContainers.find(10)).toBe(2);
});

test('find method should return the smallest index for the number', () => {
    const numberContainers = new NumberContainers();
    numberContainers.change(2, 10);
    numberContainers.change(3, 10);
    numberContainers.change(1, 10);
    numberContainers.change(1, 20);
    numberContainers.change(2, 20);
    expect(numberContainers.find(10)).toBe(3);
});

test('find method should return the smallest index for the number', () => {
    const numberContainers = new NumberContainers();
    numberContainers.change(2, 10);
    numberContainers.change(3, 10);
    numberContainers.change(1, 10);
    numberContainers.change(1, 20);
    numberContainers.change(2, 20);
    numberContainers.change(3, 20);
    expect(numberContainers.find(10)).toBe(-1);
});

// faliled tests:

test('Test 1', () => {
    const numberContainers = new NumberContainers();
    expect(numberContainers.change(0, 10)).toBe(null);
    expect(numberContainers.change(1, 20)).toBe(null);
    expect(numberContainers.change(2, 30)).toBe(null);
    expect(numberContainers.change(3, 40)).toBe(null);
    expect(numberContainers.change(4, 50)).toBe(null);
    expect(numberContainers.change(5, 60)).toBe(null);
    expect(numberContainers.change(6, 70)).toBe(null);
    expect(numberContainers.change(7, 80)).toBe(null);
    expect(numberContainers.change(8, 90)).toBe(null);
    expect(numberContainers.change(9, 100)).toBe(null);
    expect(numberContainers.find(10)).toBe(0);
    expect(numberContainers.find(20)).toBe(1);
    expect(numberContainers.find(30)).toBe(2);
    expect(numberContainers.find(40)).toBe(3);
    expect(numberContainers.find(50)).toBe(4);
    expect(numberContainers.find(60)).toBe(5);
    expect(numberContainers.find(70)).toBe(6);
    expect(numberContainers.find(80)).toBe(7);
    expect(numberContainers.find(90)).toBe(8);
    expect(numberContainers.find(100)).toBe(9);
    expect(numberContainers.change(0, 20)).toBe(null);
    expect(numberContainers.change(1, 30)).toBe(null);
    expect(numberContainers.change(2, 40)).toBe(null);
    expect(numberContainers.change(3, 50)).toBe(null);
    expect(numberContainers.change(4, 60)).toBe(null);
    expect(numberContainers.change(5, 70)).toBe(null);
    expect(numberContainers.change(6, 80)).toBe(null);
    expect(numberContainers.change(7, 90)).toBe(null);
    expect(numberContainers.change(8, 100)).toBe(null);
    expect(numberContainers.change(9, 10)).toBe(null);
    expect(numberContainers.find(10)).toBe(9);
    expect(numberContainers.find(20)).toBe(0);
    expect(numberContainers.find(30)).toBe(1);
    expect(numberContainers.find(40)).toBe(2);
    expect(numberContainers.find(50)).toBe(3);
    expect(numberContainers.find(60)).toBe(4);
    expect(numberContainers.find(70)).toBe(5);
    expect(numberContainers.find(80)).toBe(6);
    expect(numberContainers.find(90)).toBe(7);
    expect(numberContainers.find(100)).toBe(8);
    expect(numberContainers.change(0, 20)).toBe(null);
    expect(numberContainers.change(1, 30)).toBe(null);
    expect(numberContainers.change(2, 40)).toBe(null);
    expect(numberContainers.change(3, 50)).toBe(null);
    expect(numberContainers.change(4, 60)).toBe(null);
    expect(numberContainers.change(5, 70)).toBe(null);
    expect(numberContainers.change(6, 80)).toBe(null);
    expect(numberContainers.change(7, 90)).toBe(null);
    expect(numberContainers.change(8, 100)).toBe(null);
    expect(numberContainers.change(9, 10)).toBe(null);
    expect(numberContainers.find(10)).toBe(9);
    expect(numberContainers.find(20)).toBe(0);
    expect(numberContainers.find(30)).toBe(1);
    expect(numberContainers.find(40)).toBe(2);
    expect(numberContainers.find(50)).toBe(3);
    expect(numberContainers.find(60)).toBe(4);
    expect(numberContainers.find(70)).toBe(5);
    expect(numberContainers.find(80)).toBe(6);
    expect(numberContainers.find(90)).toBe(7);
    expect(numberContainers.find(100)).toBe(8);
    expect(numberContainers.change(0, 20)).toBe(null);
    expect(numberContainers.change(1, 30)).toBe(null);
    expect(numberContainers.change(2, 40)).toBe(null);
});
