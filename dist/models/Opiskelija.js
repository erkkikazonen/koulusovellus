"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opiskelija = void 0;
class Opiskelija {
    constructor(opiskelijaId, nimi, syntymäaika, opintoOhjelma) {
        this.opiskelijaId = opiskelijaId;
        this.nimi = nimi;
        this.syntymäaika = syntymäaika;
        this.opintoOhjelma = opintoOhjelma;
        this.opintopisteet = 0;
    }
    getId() {
        return this.opiskelijaId;
    }
    setId(id) {
        this.opiskelijaId = id;
        return this;
    }
    getNimi() {
        return this.nimi;
    }
    setNimi(nimi) {
        this.nimi = nimi;
    }
    getSyntymäaika() {
        return this.syntymäaika;
    }
    setSyntymäaika(syntymäaika) {
        this.syntymäaika = syntymäaika;
    }
    getOpintoOhjelma() {
        return this.opintoOhjelma;
    }
    setOpintoOhjelma(opintoOhjelma) {
        this.opintoOhjelma = opintoOhjelma;
    }
    getOpintopisteet() {
        return this.opintopisteet;
    }
    setOpintopisteet(opintopisteet) {
        this.opintopisteet = opintopisteet;
    }
    lisääOpintopisteitä(pisteet) {
        this.opintopisteet += pisteet;
        return this;
    }
    vaihdaOpintoOhjelma(uusiOhjelma) {
        this.opintoOhjelma = uusiOhjelma;
    }
}
exports.Opiskelija = Opiskelija;
