import { Kurssi } from '../src/models/Kurssi';

describe('Kurssi', () => {
    it('pitäisi luoda uusi kurssi oikeilla tiedoilla', () => {
        const kurssi = new Kurssi('1', 'Ohjelmointi 1', 5, '1');

        expect(kurssi.getId()).toBe('1');
        expect(kurssi.getNimi()).toBe('Ohjelmointi 1');
        expect(kurssi.getOpintopisteet()).toBe(5);
        expect(kurssi.getOpettajaId()).toBe('1');
    });

    it('pitäisi lisätä osallistuja oikein', () => {
        const kurssi = new Kurssi('1', 'Ohjelmointi 1', 5, '1');

        kurssi.lisääOsallistuja('1');
        expect(kurssi.getOsallistujat()).toEqual(['1']);

        kurssi.lisääOsallistuja('2');
        expect(kurssi.getOsallistujat()).toEqual(['1', '2']);
    });

    it('pitäisi poistaa osallistuja oikein', () => {
        const kurssi = new Kurssi('1', 'Ohjelmointi 1', 5, '1');

        kurssi.lisääOsallistuja('1');
        kurssi.lisääOsallistuja('2');
        kurssi.poistaOsallistuja('1');
        expect(kurssi.getOsallistujat()).toEqual(['2']);
    });

    it('pitäisi muuttaa opintopisteitä oikein', () => {
        const kurssi = new Kurssi('1', 'Ohjelmointi 1', 5, '1');

        kurssi.setOpintopisteet(3);
        expect(kurssi.getOpintopisteet()).toBe(3);
    });

    it('pitäisi vaihtaa opettajaa oikein', () => {
        const kurssi = new Kurssi('1', 'Ohjelmointi 1', 5, '1');

        kurssi.setOpettajaId('2');
        expect(kurssi.getOpettajaId()).toBe('2');
    });
});