class PersonService {

    constructor() {
        this.persons = [];
    }

    getByName(name) {
        for (let person of this.persons) {
            if (person.name === name) {
                return person;
            }
        }
        return undefined;
    }

    getAll() {
        return this.persons;
    }

    deleteByName(person) {
        for (let i = 0; i < this.persons.length; i++) {
            if(this.persons[i].name === person) {
                this.persons.splice(i, 1)
            }
        }
    }

    checkNameExists(name) {
        const index = this.persons.findIndex(el => el.name === name);
        switch (index) {
            case -1:
                return false;
            default:
                return true;
        }
    }

    save(person, update = null) {
        const index = this.persons.findIndex(el => el.name === person.name);
        switch (index) {
            case -1:
                this.persons.push(person);
                break;
            default:
                this.persons[index] = update;
                break;
        }
    }
}

module.exports = PersonService;
