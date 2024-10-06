"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OpiskelijaRepository_1 = require("./repositories/OpiskelijaRepository");
const OpettajaRepository_1 = require("./repositories/OpettajaRepository");
const KurssiRepository_1 = require("./repositories/KurssiRepository");
const ArviointiRepository_1 = require("./repositories/ArviointiRepository");
const OpiskelijaController_1 = require("./controllers/OpiskelijaController");
const OpettajaController_1 = require("./controllers/OpettajaController");
const KurssiController_1 = require("./controllers/KurssiController");
const ArviointiController_1 = require("./controllers/ArviointiController");
// Luo repositoryt
const opiskelijaRepository = new OpiskelijaRepository_1.OpiskelijaRepository();
const opettajaRepository = new OpettajaRepository_1.OpettajaRepository();
const kurssiRepository = new KurssiRepository_1.KurssiRepository();
const arviointiRepository = new ArviointiRepository_1.ArviointiRepository();
// Luo controllerit
const opiskelijaController = new OpiskelijaController_1.OpiskelijaController(opiskelijaRepository);
const opettajaController = new OpettajaController_1.OpettajaController(opettajaRepository);
const kurssiController = new KurssiController_1.KurssiController(kurssiRepository);
const arviointiController = new ArviointiController_1.ArviointiController(arviointiRepository);
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
