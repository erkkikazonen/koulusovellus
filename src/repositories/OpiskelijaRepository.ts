import { Opiskelija } from "../models/Opiskelija";

export class OpiskelijaRepository {
    private opiskelijat: Map<string, Opiskelija> = new Map();

    public lisääOpiskelija(opiskelija: Opiskelija): void {
        this.opiskelijat.set(opiskelija.getId(), opiskelija);
    }

    public haeOpiskelija(id: string): Opiskelija | undefined {
        return this.opiskelijat.get(id);
    }

    public haeKaikkiOpiskelijat(): Opiskelija[] {
        return Array.from(this.opiskelijat.values());
    }

    public päivitäOpiskelija(opiskelija: Opiskelija): boolean {
        if (this.opiskelijat.has(opiskelija.getId())) {
            this.opiskelijat.set(opiskelija.getId(), opiskelija);
            return true;
        }
        return false;
    }

    public poistaOpiskelija(id: string): boolean {
        return this.opiskelijat.delete(id);
    }

    public haeOpiskelijatOpintoOhjelmasta(opintoOhjelma: string): Opiskelija[] {
        return this.haeKaikkiOpiskelijat().filter(opiskelija => opiskelija.getOpintoOhjelma() === opintoOhjelma);
    }
}