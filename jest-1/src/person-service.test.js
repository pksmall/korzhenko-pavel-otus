const personService = require("./person-service");

test("person service return empty array", () => {
    const result = new personService();
    expect(result.getAll()).toEqual([]);
});

test("person service save person", () => {
    const result = new personService();
    result.save({name: "Ivan"});
    expect(result.getAll().length).toEqual(1);
});

test("person service return anna", () => {
    const result = new personService();
    result.save({name: "Anna"});
    expect(result.getByName('Anna')).not.toBeNull();
});

test("person service delete anna", () => {
    const result = new personService();
    result.save({name: "Bob"});
    result.save({name: "John"});
    result.save({name: "Anna"});
    result.save({name: "Willy"});
    result.deleteByName('Anna');
    expect(result.getByName('Anna')).toBeUndefined();
});

test("person service find/update person", () => {
    const result = new personService();
    result.save({name: "Bob"});
    result.save({name: "John"});
    result.save({name: "Ivan"});
    result.save({name: "Anna"});
    expect(result.getByName('Ivan')).toEqual({'name': "Ivan"});
    result.save({name: "Ivan"}, {name: "Roman"});
    result.save({name: "Willy"});
    expect(result.getByName("Roman")).toEqual({'name': "Roman"});
});

test("person service checkNameExists anna", () => {
    const result = new personService();
    result.save({name: "Anna"});
    expect(result.checkNameExists('Anna')).toEqual(true);
});
