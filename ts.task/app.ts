import { Deputy } from './models'
import { Faction } from './models/Faction.model';
import { VerhovnaRada } from './models/VerhovnaRada.model';

let poroh = new Deputy(190, 110, 'Pedro', 'Poroh', 56, true, 50000);
let zaychik = new Deputy(179, 80, 'Arsen', 'Zaya', 43, true, 10000);
let medok = new Deputy(183, 89, 'Viktor', 'Medolub', 55, false, 0);
let svetoslav = new Deputy(176, 75, 'Svetoslav', 'Vakar', 44, false, 0);
let ylia = new Deputy(163, 67, 'Ylia', 'Timka', 60, true, 25000);
let kucha = new Deputy(173, 76, 'Roman', 'Kucha', 39, true, 5000);
let viktor = new Deputy(180, 60, 'Viktor', 'Fenix', 33, false, 0);
let ostap = new Deputy(178, 103, 'Ostap', 'Pank', 36, false, 0);
let volodka = new Deputy(170, 60, 'Volodimir', 'Zelo', 42, false, 0);
let bohdan = new Deputy(172, 120, 'Bodya', 'Bohdanchuk', 47, true, 35000);
let dusya = new Deputy(165, 79, 'Dunya', 'Kostova', 39, true, 7000);

// poroh.takeBribe(40000);
// zaychik.takeBribe(40000);
// medok.takeBribe(40000);

const sonechko = new Faction('sonechko');
sonechko.addDepyty(poroh);
sonechko.addDepyty(ylia);

const holos = new Faction('holos');
holos.addDepyty(svetoslav);
holos.addDepyty(ostap);
holos.addDepyty(kucha);

const slugiZ = new Faction('slugiZ');
slugiZ.addDepyty(volodka);
slugiZ.addDepyty(bohdan);
slugiZ.addDepyty(dusya);

const vr = new VerhovnaRada();
vr.addFaction(sonechko);
vr.addFaction(holos);
vr.addFaction(slugiZ);

// vr.addDepytyToFaction(holos, viktor);
// vr.printAllDeputiesInFaction(holos);
// vr.printMaxBribeTakerInFaction(slugiZ);
// vr.printMaxBribeTakerInVR(vr.factions);














