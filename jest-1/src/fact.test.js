const fact = require('./fact');

test("1! === 1", () => {
   expect(fact(1)).toBe(1);
});

test("2! === 2", () => {
    expect(fact(2)).toBe(2);
});

test("5! === 120", () => {
    expect(fact(5)).toBe(120);
});

test("0! === 1", () => {
    expect(fact(0)).toBe(1);
});
