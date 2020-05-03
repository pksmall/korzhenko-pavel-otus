const person = require('./person');

const anna = new person(23, 'anna');
test('person should return name and age', () => {
    expect(anna).toMatchObject({age: 23, name: 'anna'});
});

test('person should be after call birthday age: 24', () => {
    anna.birthDay();
    expect(anna).toMatchObject({age: 24, name: 'anna'});
});
