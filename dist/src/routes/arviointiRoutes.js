"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ArviointiController_1 = require("../controllers/ArviointiController");
const ArviointiRepository_1 = require("../repositories/ArviointiRepository");
const router = express_1.default.Router();
const arviointiRepository = new ArviointiRepository_1.ArviointiRepository();
const arviointiController = new ArviointiController_1.ArviointiController(arviointiRepository);
router.post('/', (req, res) => {
    const { arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä } = req.body;
    arviointiController.lisääArviointi(arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä);
    res.send('Arviointi lisätty');
});
router.get('/:opiskelijaId/:kurssiId', (req, res) => {
    const arviointi = arviointiController.haeArviointi(req.params.opiskelijaId, req.params.kurssiId);
    if (arviointi) {
        res.json(arviointi);
    }
    else {
        res.status(404).send('Arviointia ei löytynyt');
    }
});
router.get('/', (req, res) => {
    const arvioinnit = arviointiController.haeKaikkiArvioinnit();
    res.json(arvioinnit);
});
router.put('/:opiskelijaId/:kurssiId', (req, res) => {
    const { uusiArvosana } = req.body;
    const success = arviointiController.päivitäArviointi(req.params.opiskelijaId, req.params.kurssiId, uusiArvosana);
    if (success) {
        res.send('Arvosana päivitetty');
    }
    else {
        res.status(404).send('Arviointia ei löytynyt');
    }
});
router.delete('/:opiskelijaId/:kurssiId', (req, res) => {
    const success = arviointiController.poistaArviointi(req.params.opiskelijaId, req.params.kurssiId);
    if (success) {
        res.send('Arviointi poistettu');
    }
    else {
        res.status(404).send('Arviointia ei löytynyt');
    }
});
router.get('/opiskelija/:opiskelijaId', (req, res) => {
    const arvioinnit = arviointiController.haeOpiskelijanArvioinnit(req.params.opiskelijaId);
    res.json(arvioinnit);
});
router.get('/kurssi/:kurssiId', (req, res) => {
    const arvioinnit = arviointiController.haeKurssinArvioinnit(req.params.kurssiId);
    res.json(arvioinnit);
});
exports.default = router;
