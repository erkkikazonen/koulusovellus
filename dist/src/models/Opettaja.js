"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opettaja = void 0;
class Opettaja {
    constructor(opettajaId, nimi, syntymäaika, opetusala) {
        this.opettajaId = opettajaId;
        this.nimi = nimi;
        this.syntymäaika = syntymäaika;
        this.opetusala = opetusala;
        this.kurssit = [];
    }
    getId() {
        return this.opettajaId;
    }
    setId(id) {
        this.opettajaId = id;
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
    getOpetusala() {
        return this.opetusala;
    }
    setOpetusala(opetusala) {
        this.opetusala = opetusala;
    }
    getKurssit() {
        return this.kurssit;
    }
    setKurssit(kurssit) {
        this.kurssit = kurssit;
    }
    lisääKurssi(kurssi) {
        this.kurssit.push(kurssi);
        return this;
    }
    poistaKurssi(kurssi) {
        const index = this.kurssit.indexOf(kurssi);
        if (index > -1) {
            this.kurssit.splice(index, 1);
        }
    }
    vaihdaOpetusala(uusiAla) {
        this.opetusala = uusiAla;
    }
}
exports.Opettaja = Opettaja;
