"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const KurssiController_1 = require("../controllers/KurssiController");
const KurssiRepository_1 = require("../repositories/KurssiRepository");
const router = express_1.default.Router();
const kurssiRepository = new KurssiRepository_1.KurssiRepository();
const kurssiController = new KurssiController_1.KurssiController(kurssiRepository);
router.get('/:id', (req, res) => {
    const kurssi = kurssiController.haeKurssi(req.params.id);
    if (kurssi) {
        res.json(kurssi);
    }
    else {
        res.status(404).send('Kurssia ei löytynyt');
    }
});
router.get('/', (req, res) => {
    const kurssit = kurssiController.haeKaikkiKurssit();
    res.json(kurssit);
});
router.delete('/:id', (req, res) => {
    const success = kurssiController.poistaKurssi(req.params.id);
    if (success) {
        res.send('Kurssi poistettu');
    }
    else {
        res.status(404).send('Kurssia ei löytynyt');
    }
});
router.get('/opettaja/:opettajaId', (req, res) => {
    const kurssit = kurssiController.haeKurssitOpettajalta(req.params.opettajaId);
    res.json(kurssit);
});
router.put('/:kurssiId/osallistuja/:opiskelijaId', (req, res) => {
    const { kurssiId, opiskelijaId } = req.params;
    kurssiController.lisääOsallistujaKurssille(kurssiId, opiskelijaId);
    res.send('Osallistuja lisätty');
});
exports.default = router;
