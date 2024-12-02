"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Opettaja_1 = require("../src/models/Opettaja");
describe('Opettaja', () => {
    it('pitäisi luoda uusi opettaja oikeilla tiedoilla', () => {
        const opettaja = new Opettaja_1.Opettaja('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
        expect(opettaja.getId()).toBe('1');
        expect(opettaja.getNimi()).toBe('Matti Meikäläinen');
        expect(opettaja.getSyntymäaika().getFullYear()).toBe(1990);
        expect(opettaja.getSyntymäaika().getMonth()).toBe(0);
        expect(opettaja.getSyntymäaika().getDate()).toBe(1);
        expect(opettaja.getOpetusala()).toBe('Tietojenkäsittelytiede');
    });
    it('pitäisi lisätä kurssi oikein', () => {
        const opettaja = new Opettaja_1.Opettaja('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
        opettaja.lisääKurssi('Ohjelmointi 1');
        expect(opettaja.getKurssit()).toEqual(['Ohjelmointi 1']);
        opettaja.lisääKurssi('Ohjelmointi 2');
        expect(opettaja.getKurssit()).toEqual(['Ohjelmointi 1', 'Ohjelmointi 2']);
    });
    it('pitäisi poistaa kurssi oikein', () => {
        const opettaja = new Opettaja_1.Opettaja('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
        opettaja.poistaKurssi('Ohjelmointi 1');
        expect(opettaja.getKurssit()).toEqual([]);
    });
    it('pitäisi vaihtaa opetusala oikein', () => {
        const opettaja = new Opettaja_1.Opettaja('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
        opettaja.vaihdaOpetusala('Tietotekniikka');
        expect(opettaja.getOpetusala()).toBe('Tietotekniikka');
    });
});
