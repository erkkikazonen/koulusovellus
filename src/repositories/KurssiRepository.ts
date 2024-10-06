import { Kurssi } from "../models/Kurssi";

export class KurssiRepository {
    private kurssit: Map<string, Kurssi> = new Map();

    public lisääKurssi(kurssi: Kurssi): void {
        this.kurssit.set(kurssi.getId(), kurssi);
    }

    public haeKurssi(id: string): Kurssi | undefined {
        return this.kurssit.get(id);
    }

    public haeKaikkiKurssit(): Kurssi[] {
        return Array.from(this.kurssit.values());
    }

    public päivitäKurssi(kurssi: Kurssi): boolean {
        if (this.kurssit.has(kurssi.getId())) {
            this.kurssit.set(kurssi.getId(), kurssi);
            return true;
        }
        return false;
    }

    public poistaKurssi(id: string): boolean {
        return this.kurssit.delete(id);
    }

    public haeKurssitOpettajalta(opettajaId: string): Kurssi[] {
        return this.haeKaikkiKurssit().filter(kurssi => kurssi.getOpettajaId() === opettajaId);
    }

    public haeKurssitOpintopisteillä(opintopisteet: number): Kurssi[] {
        return this.haeKaikkiKurssit().filter(kurssi => kurssi.getOpintopisteet() === opintopisteet);
    }
}