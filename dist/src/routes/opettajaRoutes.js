"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OpettajaController_1 = require("../controllers/OpettajaController");
const OpettajaRepository_1 = require("../repositories/OpettajaRepository");
const router = express_1.default.Router();
const opettajaRepository = new OpettajaRepository_1.OpettajaRepository();
const opettajaController = new OpettajaController_1.OpettajaController(opettajaRepository);
router.post('/', (req, res) => {
    const { id, nimi, syntymäaika, palkka } = req.body;
    const opettaja = opettajaController.lisääOpettaja(id, nimi, syntymäaika, palkka);
    res.json(opettaja);
});
router.get('/:id', (req, res) => {
    const opettaja = opettajaController.haeOpettaja(req.params.id);
    if (opettaja) {
        res.json(opettaja);
    }
    else {
        res.status(404).send('Opettajaa ei löytynyt');
    }
});
router.get('/', (req, res) => {
    const opettajat = opettajaController.haeKaikkiOpettajat();
    res.json(opettajat);
});
router.put('/:id/opetusala', (req, res) => {
    const { uusiOpetusala } = req.body;
    const success = opettajaController.päivitäOpetusala(req.params.id, uusiOpetusala);
    if (success) {
        res.send('Opetusala päivitetty');
    }
    else {
        res.status(404).send('Opettajaa ei löytynyt');
    }
});
router.delete('/:id', (req, res) => {
    const success = opettajaController.poistaOpettaja(req.params.id);
    if (success) {
        res.send('Opettaja poistettu');
    }
    else {
        res.status(404).send('Opettajaa ei löytynyt');
    }
});
router.get('/opetusala/:opetusala', (req, res) => {
    const opettajat = opettajaController.haeOpettajatOpetusalalta(req.params.opetusala);
    res.json(opettajat);
});
exports.default = router;
