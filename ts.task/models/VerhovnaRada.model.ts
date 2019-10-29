import { Faction } from "./Faction.model";
import { Deputy } from "./Deputy.model";

export class VerhovnaRada {
    factions: Faction[] = [];
    
    constructor(factions: Faction[] = []) {
        this.factions = factions;
    }

    addFaction(addedFaction: Faction) {
        this.factions.push(addedFaction);
    };

    deleteFaction(deletedFaction: Faction) {
        const findFraction = this.factions.findIndex(faction => {
            return deletedFaction === faction;
        });
        this.factions.splice(findFraction, 1);
    };

    printAllFractions() {
        this.factions.forEach(f => console.log(f.name));
    };

    printFraction(findedFraction: Faction) {
        const findFac = this.factions.find(faction => {
            return findedFraction === faction;
        });
        console.log(findFac);
    };

    addDepytyToFaction(faction: Faction, depyty: Deputy) {
        faction.addDepyty(depyty);
    };

    deleteDepytyFromFaction(faction: Faction, depyty: Deputy) {
        faction.deleteDepyty(depyty);
    };

    printAllBribeTakersInFaction(faction: Faction) {
        const depytiesBribeTakers = faction.deputies.filter(dep => dep.bribeTaker);
        console.log(depytiesBribeTakers);
    };

    printMaxBribeTakerInFaction(faction: Faction) {
        const maxBribeTaker = faction.printMaxBribeTaker();
        console.log(maxBribeTaker);
    };

    printMaxBribeTakerInVR() {
        const allDeputies: Deputy[] = []; 

        this.factions.forEach((fac) => {
            fac.deputies.forEach(depyty => allDeputies.push(depyty));
        })

        const [maxBribeTakerInVR] = allDeputies.sort((el1, el2) =>  el2.sizeBribe - el1.sizeBribe);
        console.log(maxBribeTakerInVR);
    };

    printAllDeputiesInFaction(faction: Faction) {
        console.log(faction.deputies);
    }
}
