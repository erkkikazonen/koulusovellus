"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArviointiRepository = void 0;
class ArviointiRepository {
    constructor() {
        this.arvioinnit = new Map();
    }
    haeKurssinArvioinnit(kurssiId) {
        throw new Error("Method not implemented.");
    }
    haeOpiskelijanArvioinnit(opiskelijaId) {
        throw new Error("Method not implemented.");
    }
    lisääArviointi(arviointi) {
        this.arvioinnit.set(arviointi.getId(), arviointi);
    }
    haeArviointi(id, kurssiId) {
        return this.arvioinnit.get(id);
    }
    haeKaikkiArvioinnit() {
        return Array.from(this.arvioinnit.values());
    }
    päivitäArviointi(arviointi) {
        if (this.arvioinnit.has(arviointi.getId())) {
            this.arvioinnit.set(arviointi.getId(), arviointi);
            return true;
        }
        return false;
    }
    poistaArviointi(id, kurssiId) {
        return this.arvioinnit.delete(id);
    }
    haeArvioinnitKurssista(kurssiId) {
        return this.haeKaikkiArvioinnit().filter(arviointi => arviointi.getKurssiId() === kurssiId);
    }
    haeArvioinnitOpiskelijasta(opiskelijaId) {
        return this.haeKaikkiArvioinnit().filter(arviointi => arviointi.getOpiskelijaId() === opiskelijaId);
    }
}
exports.ArviointiRepository = ArviointiRepository;
