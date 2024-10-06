import { Arviointi } from "../models/Arviointi";
import { ArviointiRepository } from "../repositories/ArviointiRepository";

export class ArviointiController {
    private repository: ArviointiRepository;

    constructor(repository: ArviointiRepository) {
        this.repository = repository;
    }

    public lisääArviointi(arviointiId: string,opiskelijaId: string, kurssiId: string, arvosana: number, päivämäärä: Date): void {
        const uusiArviointi = new Arviointi(arviointiId, opiskelijaId, kurssiId, arvosana, päivämäärä);
        this.repository.lisääArviointi(uusiArviointi);
    }

    public haeArviointi(opiskelijaId: string, kurssiId: string): Arviointi | undefined {
        return this.repository.haeArviointi(opiskelijaId, kurssiId);
    }

    public haeKaikkiArvioinnit(): Arviointi[] {
        return this.repository.haeKaikkiArvioinnit();
    }

    public päivitäArviointi(opiskelijaId: string, kurssiId: string, uusiArvosana: number): boolean {
        const arviointi = this.repository.haeArviointi(opiskelijaId, kurssiId);
        if (arviointi) {
            arviointi.muutaArvosana(uusiArvosana);
            return this.repository.päivitäArviointi(arviointi);
        }
        return false;
    }

    public poistaArviointi(opiskelijaId: string, kurssiId: string): boolean {
        return this.repository.poistaArviointi(opiskelijaId, kurssiId);
    }

    public haeOpiskelijanArvioinnit(opiskelijaId: string): Arviointi[] {
        return this.repository.haeOpiskelijanArvioinnit(opiskelijaId);
    }

    public haeKurssinArvioinnit(kurssiId: string): Arviointi[] {
        return this.repository.haeKurssinArvioinnit(kurssiId);
    }
}