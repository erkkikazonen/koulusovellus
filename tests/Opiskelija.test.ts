import { Opiskelija } from '../src/models/Opiskelija';

describe('Opiskelija', () => {
  it('pitäisi luoda uusi opiskelija oikeilla tiedoilla', () => {
    const opiskelija = new Opiskelija('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
    
    expect(opiskelija.getId()).toBe('1');
    expect(opiskelija.getNimi()).toBe('Matti Meikäläinen');
    expect(opiskelija.getOpintoOhjelma()).toBe('Tietojenkäsittelytiede');
  });

  it('pitäisi lisätä opintopisteitä oikein', () => {
    const opiskelija = new Opiskelija('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');
    
    opiskelija.lisääOpintopisteitä(5);
    expect(opiskelija.getOpintopisteet()).toBe(5);

    opiskelija.lisääOpintopisteitä(3);
    expect(opiskelija.getOpintopisteet()).toBe(8);
  });

  it('pitäisi vaihtaa opinto-ohjelma oikein', () => {
    const opiskelija = new Opiskelija('1', 'Matti Meikäläinen', new Date(1990, 0, 1), 'Tietojenkäsittelytiede');

    opiskelija.vaihdaOpintoOhjelma('Tietotekniikka');
    expect(opiskelija.getOpintoOhjelma()).toBe('Tietotekniikka');
  });

});