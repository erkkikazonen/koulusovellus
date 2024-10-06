import { Opettaja } from "../models/Opettaja";

export class OpettajaRepository {
    private opettajat: Map<string, Opettaja> = new Map();

    public lisääOpettaja(opettaja: Opettaja): void {
        this.opettajat.set(opettaja.getId(), opettaja);
    }

    public haeOpettaja(id: string): Opettaja | undefined {
        return this.opettajat.get(id);
    }

    public haeKaikkiOpettajat(): Opettaja[] {
        return Array.from(this.opettajat.values());
    }

    public päivitäOpettaja(opettaja: Opettaja): boolean {
        if (this.opettajat.has(opettaja.getId())) {
            this.opettajat.set(opettaja.getId(), opettaja);
            return true;
        }
        return false;
    }

    public poistaOpettaja(id: string): boolean {
        return this.opettajat.delete(id);
    }

    public haeOpettajatOpetusalalta(opetusala: string): Opettaja[] {
        return this.haeKaikkiOpettajat().filter(opettaja => opettaja.getOpetusala() === opetusala);
    }
}