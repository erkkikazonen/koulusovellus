import express from 'express';
import { ArviointiController } from '../controllers/ArviointiController';
import { ArviointiRepository } from '../repositories/ArviointiRepository';

const router = express.Router();
const arviointiRepository = new ArviointiRepository();
const arviointiController = new ArviointiController(arviointiRepository);

router.post('/', (req, res) => {
    const { arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä } = req.body;
    arviointiController.lisääArviointi(arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä);
    res.send('Arviointi lisätty');
});

router.get('/:opiskelijaId/:kurssiId', (req, res) => {
    const arviointi = arviointiController.haeArviointi(req.params.opiskelijaId, req.params.kurssiId);
    if (arviointi) {
        res.json(arviointi);
    } else {
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
    } else {
        res.status(404).send('Arviointia ei löytynyt');
    }
});

router.delete('/:opiskelijaId/:kurssiId', (req, res) => {
    const success = arviointiController.poistaArviointi(req.params.opiskelijaId, req.params.kurssiId);
    if (success) {
        res.send('Arviointi poistettu');
    } else {
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

export default router;