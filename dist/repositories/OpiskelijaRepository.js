"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpiskelijaRepository = void 0;
class OpiskelijaRepository {
    constructor() {
        this.opiskelijat = new Map();
    }
    lisääOpiskelija(opiskelija) {
        this.opiskelijat.set(opiskelija.getId(), opiskelija);
    }
    haeOpiskelija(id) {
        return this.opiskelijat.get(id);
    }
    haeKaikkiOpiskelijat() {
        return Array.from(this.opiskelijat.values());
    }
    päivitäOpiskelija(opiskelija) {
        if (this.opiskelijat.has(opiskelija.getId())) {
            this.opiskelijat.set(opiskelija.getId(), opiskelija);
            return true;
        }
        return false;
    }
    poistaOpiskelija(id) {
        return this.opiskelijat.delete(id);
    }
    haeOpiskelijatOpintoOhjelmasta(opintoOhjelma) {
        return this.haeKaikkiOpiskelijat().filter(opiskelija => opiskelija.getOpintoOhjelma() === opintoOhjelma);
    }
}
exports.OpiskelijaRepository = OpiskelijaRepository;
