"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArviointiController = void 0;
const Arviointi_1 = require("../models/Arviointi");
class ArviointiController {
    constructor(repository) {
        this.repository = repository;
    }
    lisääArviointi(arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä) {
        const uusiArviointi = new Arviointi_1.Arviointi(arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä);
        this.repository.lisääArviointi(uusiArviointi);
    }
    haeArviointi(opiskelijaId, kurssiId) {
        return this.repository.haeArviointi(opiskelijaId, kurssiId);
    }
    haeKaikkiArvioinnit() {
        return this.repository.haeKaikkiArvioinnit();
    }
    päivitäArviointi(opiskelijaId, kurssiId, uusiArvosana) {
        const arviointi = this.repository.haeArviointi(opiskelijaId, kurssiId);
        if (arviointi) {
            arviointi.muutaArvosana(uusiArvosana);
            return this.repository.päivitäArviointi(arviointi);
        }
        return false;
    }
    poistaArviointi(opiskelijaId, kurssiId) {
        return this.repository.poistaArviointi(opiskelijaId, kurssiId);
    }
    haeOpiskelijanArvioinnit(opiskelijaId) {
        return this.repository.haeOpiskelijanArvioinnit(opiskelijaId);
    }
    haeKurssinArvioinnit(kurssiId) {
        return this.repository.haeKurssinArvioinnit(kurssiId);
    }
}
exports.ArviointiController = ArviointiController;
