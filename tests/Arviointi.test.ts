import { Arviointi } from "../src/models/Arviointi";

describe('Arviointi', () => {
    it('pitäisi luoda uusi arviointi oikeilla tiedoilla', () => {
        const arviointi = new Arviointi('1', '1', "5", 5, new Date(2020, 0, 1));

        expect(arviointi.getId()).toBe('1');
        expect(arviointi.getKurssiId()).toBe('1');
        expect(arviointi.getOpiskelijaId()).toBe('5');
        expect(arviointi.getArvosana()).toBe(5);
        expect(arviointi.getPäivämäärä().getFullYear()).toBe(2020);
        expect(arviointi.getPäivämäärä().getMonth()).toBe(0);
        expect(arviointi.getPäivämäärä().getDate()).toBe(1);
    });

    it('pitäisi muuttaa arvosana oikein', () => {
        const arviointi = new Arviointi('1', '1', "5", 5, new Date(2020, 0, 1));

        arviointi.muutaArvosana(3);
        expect(arviointi.getArvosana()).toBe(3);
    });
    it('pitäisi päivittää päivämäärä oikein', () => {
        const arviointi = new Arviointi('1', '1', "5", 5, new Date(2020, 0, 1));

        arviointi.päivitäPäivämäärä(new Date(2020, 0, 2));
        expect(arviointi.getPäivämäärä().getFullYear()).toBe(2020);
        expect(arviointi.getPäivämäärä().getMonth()).toBe(0);
        expect(arviointi.getPäivämäärä().getDate()).toBe(2);
    });
});