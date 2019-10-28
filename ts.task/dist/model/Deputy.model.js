"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_model_1 = require("./Person.model");
class Deputy extends Person_model_1.Person {
    constructor(personHeight, personWeight, nameDeputy, surnameDeputy, ageDeputy, bribeTakerDeputy, sizeBribeDeputy) {
        super(personHeight, personWeight);
        this.name = nameDeputy;
        this.surname = surnameDeputy;
        this.age = ageDeputy;
        this.bribeTaker = bribeTakerDeputy;
        this.sizeBribe = sizeBribeDeputy;
    }
    takeBribe() {
        if (this.bribeTaker) {
            console.log(`${this.name}: Give it! Faster!!`);
            (this.sizeBribe > 20000) ? console.log('Give it! Faster!!Haha') : console.log('I need to think');
        }
        else {
            console.log(`${this.name}: No, I'am honest deputy and I never take this bribe`);
        }
    }
}
exports.Deputy = Deputy;
