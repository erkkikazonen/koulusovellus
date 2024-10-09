import express from 'express';
import { OpiskelijaController } from '../controllers/OpiskelijaController';
import { OpiskelijaRepository } from '../repositories/OpiskelijaRepository';

const router = express.Router();
const opiskelijaRepository = new OpiskelijaRepository();
const opiskelijaController = new OpiskelijaController(opiskelijaRepository);

router.post('/', (req, res) => {
    const { id, nimi, syntymäaika, opintoOhjelma } = req.body;
    const opiskelija = opiskelijaController.lisääOpiskelija(id, nimi, syntymäaika, opintoOhjelma);
    res.json(opiskelija);
});

router.get('/:id', (req, res) => {
    const opiskelija = opiskelijaController.haeOpiskelija(req.params.id);
    if (opiskelija) {
        res.json(opiskelija);
    } else {
        res.status(404).send('Opiskelijaa ei löytynyt');
    }
});

router.get('/', (req, res) => {
    const opiskelijat = opiskelijaController.haeKaikkiOpiskelijat();
    res.json(opiskelijat)
});

router.put('/:id/opintopisteet', (req, res) => {
    const { lisättävätPisteet } = req.body;
    const success = opiskelijaController.päivitäOpintopisteet(req.params.id, lisättävätPisteet);
    if (success) {
        res.send('Opintopisteet päivitetty');
    } else {
        res.status(404).send('Opiskelijaa ei löytynyt');
    }
});

router.put('/:id/opintoOhjelma', (req, res) => {
    const { uusiOhjelma } = req.body;
    const success = opiskelijaController.vaihdaOpintoOhjelma(req.params.id, uusiOhjelma);
    if (success) {
        res.send('Opinto-ohjelma vaihdettu');
    } else {
        res.status(404).send('Opiskelijaa ei löytynyt');
    }
});

router.delete('/:id', (req, res) => {
    const success = opiskelijaController.poistaOpiskelija(req.params.id);
    if (success) {
        res.send('Opiskelija poistettu');
    } else {
        res.status(404).send('Opiskelijaa ei löytynyt');
    }
});

router.get('/opintoOhjelma/:opintoOhjelma', (req, res) => {
    const opiskelijat = opiskelijaController.haeOpiskelijatOpintoOhjelmasta(req.params.opintoOhjelma);
    res.json(opiskelijat);
});

export default router;