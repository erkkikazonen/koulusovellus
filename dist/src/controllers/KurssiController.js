"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KurssiController = void 0;
const Kurssi_1 = require("../models/Kurssi");
class KurssiController {
    constructor(repository) {
        this.repository = repository;
    }
    haeKurssi(id) {
        return this.repository.haeKurssi(id);
    }
    haeKaikkiKurssit() {
        return this.repository.haeKaikkiKurssit();
    }
    päivitäKurssi(kurssi) {
        return this.repository.päivitäKurssi(kurssi);
    }
    poistaKurssi(id) {
        return this.repository.poistaKurssi(id);
    }
    haeKurssitOpettajalta(opettajaId) {
        return this.repository.haeKurssitOpettajalta(opettajaId);
    }
    haeKurssitOpintopisteillä(minPisteet, maxPisteet) {
        return this.repository
            .haeKaikkiKurssit()
            .filter((kurssi) => kurssi.getOpintopisteet() >= minPisteet &&
            kurssi.getOpintopisteet() <= maxPisteet);
    }
    lisääOsallistujaKurssille(kurssiId, opiskelijaId) {
        const kurssi = this.repository.haeKurssi(kurssiId);
        if (kurssi) {
            kurssi.lisääOsallistuja(opiskelijaId);
            this.repository.päivitäKurssi(kurssi);
        }
        else {
            throw new Error("Kurssia ei löytynyt");
        }
    }
    lisääKurssi(id, nimi, opintopisteet, opettajaId) {
        const kurssi = new Kurssi_1.Kurssi(id, nimi, opintopisteet, opettajaId);
        this.repository.lisääKurssi(kurssi);
        return kurssi;
    }
}
exports.KurssiController = KurssiController;
