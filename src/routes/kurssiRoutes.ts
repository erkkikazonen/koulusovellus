import express from 'express';
import { KurssiController } from '../controllers/KurssiController';
import { KurssiRepository } from '../repositories/KurssiRepository';

const router = express.Router();
const kurssiRepository = new KurssiRepository();
const kurssiController = new KurssiController(kurssiRepository);

router.get('/:id', (req, res) => {
    const kurssi = kurssiController.haeKurssi(req.params.id);
    if (kurssi) {
        res.json(kurssi);
    } else {
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
    } else {
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


export default router;