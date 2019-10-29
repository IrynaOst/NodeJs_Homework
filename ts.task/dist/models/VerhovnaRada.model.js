"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerhovnaRada {
    constructor(factions = []) {
        this.factions = [];
        this.factions = factions;
    }
    addFaction(addedFaction) {
        this.factions.push(addedFaction);
    }
    ;
    deleteFaction(deletedFaction) {
        const findFraction = this.factions.findIndex(faction => {
            return deletedFaction === faction;
        });
        this.factions.splice(findFraction, 1);
    }
    ;
    printAllFractions() {
        this.factions.forEach(f => console.log(f.name));
    }
    ;
    printFraction(findedFraction) {
        const findFac = this.factions.find(faction => {
            return findedFraction === faction;
        });
        console.log(findFac);
    }
    ;
    addDepytyToFaction(faction, depyty) {
        faction.addDepyty(depyty);
    }
    ;
    deleteDepytyFromFaction(faction, depyty) {
        faction.deleteDepyty(depyty);
    }
    ;
    printAllBribeTakersInFaction(faction) {
        const depytiesBribeTakers = faction.deputies.filter(dep => dep.bribeTaker);
        console.log(depytiesBribeTakers);
    }
    ;
    printMaxBribeTakerInFaction(faction) {
        const maxBribeTaker = faction.printMaxBribeTaker();
        console.log(maxBribeTaker);
    }
    ;
    printMaxBribeTakerInVR() {
        const allDeputies = [];
        this.factions.forEach((fac) => {
            fac.deputies.forEach(depyty => allDeputies.push(depyty));
        });
        const [maxBribeTakerInVR] = allDeputies.sort((el1, el2) => el2.sizeBribe - el1.sizeBribe);
        console.log(maxBribeTakerInVR);
    }
    ;
    printAllDeputiesInFaction(faction) {
        console.log(faction.deputies);
    }
}
exports.VerhovnaRada = VerhovnaRada;
