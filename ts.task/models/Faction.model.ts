import { Deputy } from "./Deputy.model";

export class Faction {
    deputies: Deputy [] = [];
    name: string;

    constructor(name: string, deputies: Deputy [] = []){
        this.deputies = deputies;
        this.name = name;
    };

    addDepyty(addedDepyty: Deputy) {
        this.deputies.push(addedDepyty);
    };

    deleteDepyty(deletedDepyty: Deputy) {
        const findDep = this.deputies.findIndex(depyty => {
            return deletedDepyty === depyty;
        });
        this.deputies.splice(findDep, 1);
    };

    deletebribeTakers() {
        this.deputies = this.deputies.filter(dep => !dep.bribeTaker);
    };

    printMaxBribeTaker() {
        const [maxBribeTaker] = this.deputies.sort((obj1, obj2) => {
        return  obj2.sizeBribe - obj1.sizeBribe;
        })
        console.log(maxBribeTaker);
    };

    printAllDeputies() {
        console.log(this.deputies);
    };

    deleteAllDeputies() {
        this.deputies = [];
    };

    getTotalSumAllBribes() {
        const totalSumBribes = this.deputies.reduce((sum, sizeOfOneBribe) => {
            return sum + sizeOfOneBribe.sizeBribe;
        }, 0);
        console.log(totalSumBribes);
    }
}