class PersonUI {

    constructor(personService) {
        this._personService = personService;
    }

    getByName(name) {
        return this._personService.getByName(name);
    }

    getAll() {
        return this._personService.getAll();
    }

    checkNameExists(name) {
        return this._personService.checkNameExists(name);
    }

    save(person, update = null) {
        this._personService.save(person, update);
    }
}

module.exports = PersonUI;
