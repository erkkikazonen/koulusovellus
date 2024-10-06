import { Opiskelija } from './models/Opiskelija';
import { Opettaja } from './models/Opettaja';
import { Kurssi } from './models/Kurssi';
import { Arviointi } from './models/Arviointi';
import { OpiskelijaRepository } from './repositories/OpiskelijaRepository';
import { OpettajaRepository } from './repositories/OpettajaRepository';
import { KurssiRepository } from './repositories/KurssiRepository';
import { ArviointiRepository } from './repositories/ArviointiRepository';
import { OpiskelijaController } from './controllers/OpiskelijaController';
import { OpettajaController } from './controllers/OpettajaController';
import { KurssiController } from './controllers/KurssiController';
import { ArviointiController } from './controllers/ArviointiController';

// Luo repositoryt
const opiskelijaRepository = new OpiskelijaRepository();
const opettajaRepository = new OpettajaRepository();
const kurssiRepository = new KurssiRepository();
const arviointiRepository = new ArviointiRepository();

// Luo controllerit
const opiskelijaController = new OpiskelijaController(opiskelijaRepository);
const opettajaController = new OpettajaController(opettajaRepository);
const kurssiController = new KurssiController(kurssiRepository);
const arviointiController = new ArviointiController(arviointiRepository);

// Esimerkki sovelluksen käytöstä
const opiskelija = opiskelijaController.lisääOpiskelija('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
const opettaja = opettajaController.lisääOpettaja('1', 'Liisa Opettaja', new Date(1980, 5, 15), 'Matematiikka');
const kurssi = kurssiController.lisääKurssi('TIED001', 'Ohjelmoinnin perusteet', 5, opettaja.getId());

// Lisää opiskelija kurssille
kurssi.lisääOsallistuja(opiskelija.getId());

// Lisää arviointi
const arviointi = arviointiController.lisääArviointi('1', kurssi.getId(), opiskelija.getId(), 4, new Date());

// Lisää opintopisteet opiskelijalle
opiskelija.lisääOpintopisteitä(kurssi.getOpintopisteet());

// Lisää kurssi opettajan kursseihin
opettaja.lisääKurssi(kurssi.getId());

console.log('Opiskelijat:', opiskelijaController.haeKaikkiOpiskelijat());
console.log('Opettajat:', opettajaController.haeKaikkiOpettajat());
console.log('Kurssit:', kurssiController.haeKaikkiKurssit());
console.log('Arvioinnit:', arviointiController.haeKaikkiArvioinnit());
console.log('Opiskelijan opintopisteet:', opiskelija.getOpintopisteet());
console.log('Opettajan kurssit:', opettaja.getKurssit());
console.log('Kurssin osallistujat:', kurssi.getOsallistujat());