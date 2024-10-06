"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KurssiRepository = void 0;
class KurssiRepository {
    constructor() {
        this.kurssit = new Map();
    }
    lisääKurssi(kurssi) {
        this.kurssit.set(kurssi.getId(), kurssi);
    }
    haeKurssi(id) {
        return this.kurssit.get(id);
    }
    haeKaikkiKurssit() {
        return Array.from(this.kurssit.values());
    }
    päivitäKurssi(kurssi) {
        if (this.kurssit.has(kurssi.getId())) {
            this.kurssit.set(kurssi.getId(), kurssi);
            return true;
        }
        return false;
    }
    poistaKurssi(id) {
        return this.kurssit.delete(id);
    }
    haeKurssitOpettajalta(opettajaId) {
        return this.haeKaikkiKurssit().filter(kurssi => kurssi.getOpettajaId() === opettajaId);
    }
    haeKurssitOpintopisteillä(opintopisteet) {
        return this.haeKaikkiKurssit().filter(kurssi => kurssi.getOpintopisteet() === opintopisteet);
    }
}
exports.KurssiRepository = KurssiRepository;
