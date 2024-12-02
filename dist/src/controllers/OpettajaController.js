"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpettajaController = void 0;
const Opettaja_1 = require("../models/Opettaja");
class OpettajaController {
    constructor(repository) {
        this.repository = repository;
    }
    lisääOpettaja(id, nimi, syntymäaika, opetusala) {
        const opettaja = new Opettaja_1.Opettaja(id, nimi, syntymäaika, opetusala);
        this.repository.lisääOpettaja(opettaja);
        return opettaja;
    }
    haeOpettaja(id) {
        return this.repository.haeOpettaja(id);
    }
    haeKaikkiOpettajat() {
        return this.repository.haeKaikkiOpettajat();
    }
    päivitäOpetusala(id, uusiOpetusala) {
        const opettaja = this.repository.haeOpettaja(id);
        if (opettaja) {
            opettaja.vaihdaOpetusala(uusiOpetusala);
            return this.repository.päivitäOpettaja(opettaja);
        }
        return false;
    }
    poistaOpettaja(id) {
        return this.repository.poistaOpettaja(id);
    }
    haeOpettajatOpetusalalta(opetusala) {
        return this.repository.haeOpettajatOpetusalalta(opetusala);
    }
}
exports.OpettajaController = OpettajaController;
