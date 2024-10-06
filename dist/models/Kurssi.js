"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kurssi = void 0;
class Kurssi {
    constructor(kurssiId, nimi, opintopisteet, opettajaId) {
        this.kurssiId = kurssiId;
        this.nimi = nimi;
        this.opintopisteet = opintopisteet;
        this.opettajaId = opettajaId;
        this.osallistujat = new Set();
    }
    getId() {
        return this.kurssiId;
    }
    setId(id) {
        this.kurssiId = id;
    }
    getNimi() {
        return this.nimi;
    }
    setNimi(nimi) {
        this.nimi = nimi;
    }
    getOpintopisteet() {
        return this.opintopisteet;
    }
    setOpintopisteet(opintopisteet) {
        this.opintopisteet = opintopisteet;
    }
    getOpettajaId() {
        return this.opettajaId;
    }
    setOpettajaId(opettajaId) {
        this.opettajaId = opettajaId;
    }
    getOsallistujat() {
        return Array.from(this.osallistujat);
    }
    setOsallistujat(osallistujat) {
        this.osallistujat = new Set(osallistujat);
        return this;
    }
    lisääOsallistuja(opiskelijaId) {
        this.osallistujat.add(opiskelijaId);
        return this;
    }
    poistaOsallistuja(opiskelijaId) {
        this.osallistujat.delete(opiskelijaId);
    }
    muutaOpintopisteitä(uudetPisteet) {
        this.opintopisteet = uudetPisteet;
    }
    vaihdaOpettaja(uusiOpettajaId) {
        this.opettajaId = uusiOpettajaId;
    }
}
exports.Kurssi = Kurssi;
