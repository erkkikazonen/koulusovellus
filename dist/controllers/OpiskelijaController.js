"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpiskelijaController = void 0;
const Opiskelija_1 = require("../models/Opiskelija");
class OpiskelijaController {
    constructor(repository) {
        this.repository = repository;
    }
    lisääOpiskelija(id, nimi, syntymäaika, opintoOhjelma) {
        const opiskelija = new Opiskelija_1.Opiskelija(id, nimi, syntymäaika, opintoOhjelma);
        this.repository.lisääOpiskelija(opiskelija);
        return opiskelija;
    }
    haeOpiskelija(id) {
        return this.repository.haeOpiskelija(id);
    }
    haeKaikkiOpiskelijat() {
        return this.repository.haeKaikkiOpiskelijat();
    }
    päivitäOpintopisteet(id, lisättävätPisteet) {
        const opiskelija = this.repository.haeOpiskelija(id);
        if (opiskelija) {
            opiskelija.lisääOpintopisteitä(lisättävätPisteet);
            return this.repository.päivitäOpiskelija(opiskelija);
        }
        return false;
    }
    vaihdaOpintoOhjelma(id, uusiOhjelma) {
        const opiskelija = this.repository.haeOpiskelija(id);
        if (opiskelija) {
            opiskelija.vaihdaOpintoOhjelma(uusiOhjelma);
            return this.repository.päivitäOpiskelija(opiskelija);
        }
        return false;
    }
    poistaOpiskelija(id) {
        return this.repository.poistaOpiskelija(id);
    }
    haeOpiskelijatOpintoOhjelmasta(opintoOhjelma) {
        return this.repository.haeOpiskelijatOpintoOhjelmasta(opintoOhjelma);
    }
}
exports.OpiskelijaController = OpiskelijaController;
