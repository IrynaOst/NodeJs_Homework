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
    printMaxBribeTakerInVR(factions) {
        let maxTaker = null;
        for (let i = 0; i < factions.length; i++) {
            for (let j = 0; j < factions[i].deputies.length; j++) {
                let dept = factions[i].deputies[j];
                if (maxTaker == null && dept.bribeTaker) {
                    maxTaker = dept;
                    continue;
                }
                if (dept.sizeBribe > maxTaker.sizeBribe) {
                    maxTaker = dept;
                }
            }
        }
        console.log(maxTaker);
    }
    ;
    printAllDeputiesInFaction(faction) {
        console.log(faction.deputies);
    }
}
exports.VerhovnaRada = VerhovnaRada;
