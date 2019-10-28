import { Person } from './Person.model'

export class Deputy extends Person {
    name: string;
    surname: string;
    age: number;
    bribeTaker: boolean;
    sizeBribe: number;

    constructor(
        personHeight: number, 
        personWeight: number, 
        nameDeputy: string, 
        surnameDeputy: string, 
        ageDeputy: number, 
        bribeTakerDeputy: boolean, 
        sizeBribeDeputy: number
        ) {
        super(personHeight, personWeight);
        this.name = nameDeputy;
        this.surname = surnameDeputy;  
        this.age = ageDeputy;
        this.bribeTaker = bribeTakerDeputy;
        this.sizeBribe = sizeBribeDeputy;
    }

    takeBribe(sizeBribe: number): void {
        
        if (!this.bribeTaker) {
            console.log(`${this.name}: No, I'am honest deputy and I never take this bribe`);
            return;
        }

        console.log(`${this.name}: Give it! Faster!!`);
        (sizeBribe <= this.sizeBribe) ? console.log('Give it! Faster!!Haha') : console.log('I need to think');
    }
}