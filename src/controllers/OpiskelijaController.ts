import { Opiskelija } from "../models/Opiskelija";
import { OpiskelijaRepository } from "../repositories/OpiskelijaRepository";

export class OpiskelijaController {
    private repository: OpiskelijaRepository;

    constructor(repository: OpiskelijaRepository) {
        this.repository = repository;
    }

    public lisääOpiskelija(id: string, nimi: string, syntymäaika: Date, opintoOhjelma: string): Opiskelija {
        const opiskelija = new Opiskelija(id, nimi, syntymäaika, opintoOhjelma);
        this.repository.lisääOpiskelija(opiskelija);
        return opiskelija;
    }

    public haeOpiskelija(id: string): Opiskelija | undefined {
        return this.repository.haeOpiskelija(id);
    }

    public haeKaikkiOpiskelijat(): Opiskelija[] {
        return this.repository.haeKaikkiOpiskelijat();
    }

    public päivitäOpintopisteet(id: string, lisättävätPisteet: number): boolean {
        const opiskelija = this.repository.haeOpiskelija(id);
        if (opiskelija) {
            opiskelija.lisääOpintopisteitä(lisättävätPisteet);
            return this.repository.päivitäOpiskelija(opiskelija);
        }
        return false;
    }

    public vaihdaOpintoOhjelma(id: string, uusiOhjelma: string): boolean {
        const opiskelija = this.repository.haeOpiskelija(id);
        if (opiskelija) {
            opiskelija.vaihdaOpintoOhjelma(uusiOhjelma);
            return this.repository.päivitäOpiskelija(opiskelija);
        }
        return false;
    }

    public poistaOpiskelija(id: string): boolean {
        return this.repository.poistaOpiskelija(id);
    }

    public haeOpiskelijatOpintoOhjelmasta(opintoOhjelma: string): Opiskelija[] {
        return this.repository.haeOpiskelijatOpintoOhjelmasta(opintoOhjelma);
    }
}