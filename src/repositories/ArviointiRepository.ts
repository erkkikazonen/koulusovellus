import { Arviointi } from "../models/Arviointi";

export class ArviointiRepository {
    haeKurssinArvioinnit(kurssiId: string): Arviointi[] {
        throw new Error("Method not implemented.");
    }
    haeOpiskelijanArvioinnit(opiskelijaId: string): Arviointi[] {
        throw new Error("Method not implemented.");
    }
    private arvioinnit: Map<string, Arviointi> = new Map();

    public lisääArviointi(arviointi: Arviointi): void {
        this.arvioinnit.set(arviointi.getId(), arviointi);
    }

    public haeArviointi(id: string, kurssiId: string): Arviointi | undefined {
        return this.arvioinnit.get(id);
    }

    public haeKaikkiArvioinnit(): Arviointi[] {
        return Array.from(this.arvioinnit.values());
    }

    public päivitäArviointi(arviointi: Arviointi): boolean {
        if (this.arvioinnit.has(arviointi.getId())) {
            this.arvioinnit.set(arviointi.getId(), arviointi);
            return true;
        }
        return false;
    }

    public poistaArviointi(id: string, kurssiId: string): boolean {
        return this.arvioinnit.delete(id);
    }

    public haeArvioinnitKurssista(kurssiId: string): Arviointi[] {
        return this.haeKaikkiArvioinnit().filter(arviointi => arviointi.getKurssiId() === kurssiId);
    }

    public haeArvioinnitOpiskelijasta(opiskelijaId: string): Arviointi[] {
        return this.haeKaikkiArvioinnit().filter(arviointi => arviointi.getOpiskelijaId() === opiskelijaId);
    }
}