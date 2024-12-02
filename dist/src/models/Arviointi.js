"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arviointi = void 0;
class Arviointi {
    constructor(arviointiId, kurssiId, opiskelijaId, arvosana, päivämäärä) {
        this.arviointiId = arviointiId;
        this.kurssiId = kurssiId;
        this.opiskelijaId = opiskelijaId;
        this.arvosana = arvosana;
        this.päivämäärä = päivämäärä;
    }
    getId() {
        return this.arviointiId;
    }
    setId(id) {
        this.arviointiId = id;
    }
    getKurssiId() {
        return this.kurssiId;
    }
    setKurssiId(id) {
        this.kurssiId = id;
    }
    getOpiskelijaId() {
        return this.opiskelijaId;
    }
    setOpiskelijaId(id) {
        this.opiskelijaId = id;
    }
    getArvosana() {
        return this.arvosana;
    }
    setArvosana(arvosana) {
        this.arvosana = arvosana;
    }
    getPäivämäärä() {
        return this.päivämäärä;
    }
    setPäivämäärä(päivämäärä) {
        this.päivämäärä = päivämäärä;
    }
    muutaArvosana(uusiArvosana) {
        this.arvosana = uusiArvosana;
    }
    päivitäPäivämäärä(uusiPäivämäärä) {
        this.päivämäärä = uusiPäivämäärä;
    }
}
exports.Arviointi = Arviointi;
