const personService = require("./person-service");
const personUI = require("./person-ui");

test("person ui/service return empty array", () => {
    const person = new personService();
    const result = new personUI(person);
    expect(result.getAll()).toEqual([]);
});

test("person ui/service return person", () => {
    const person = new personService();
    person.save({name: 'Anna'});
    person.save({name: 'Bob'});
    const result = new personUI(person);
    expect(result.getByName('Bob')).toEqual({name: 'Bob'});
});

test("person ui/service checkNameExists", () => {
    const person = new personService();
    person.save({name: 'Anna'});
    const result = new personUI(person);
    expect(result.checkNameExists('Anna')).toEqual(true);
});

test("person ui save ", () => {
    const person = new personService();
    const result = new personUI(person);
    result.save({name: "Anna"});
    expect(result.checkNameExists('Anna')).toEqual(true);
});
