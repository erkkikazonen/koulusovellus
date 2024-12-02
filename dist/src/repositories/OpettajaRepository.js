"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpettajaRepository = void 0;
class OpettajaRepository {
    constructor() {
        this.opettajat = new Map();
    }
    lisääOpettaja(opettaja) {
        this.opettajat.set(opettaja.getId(), opettaja);
    }
    haeOpettaja(id) {
        return this.opettajat.get(id);
    }
    haeKaikkiOpettajat() {
        return Array.from(this.opettajat.values());
    }
    päivitäOpettaja(opettaja) {
        if (this.opettajat.has(opettaja.getId())) {
            this.opettajat.set(opettaja.getId(), opettaja);
            return true;
        }
        return false;
    }
    poistaOpettaja(id) {
        return this.opettajat.delete(id);
    }
    haeOpettajatOpetusalalta(opetusala) {
        return this.haeKaikkiOpettajat().filter(opettaja => opettaja.getOpetusala() === opetusala);
    }
}
exports.OpettajaRepository = OpettajaRepository;
