import { Opettaja } from "../models/Opettaja";
import { OpettajaRepository } from "../repositories/OpettajaRepository";

export class OpettajaController {
    private repository: OpettajaRepository;

    constructor(repository: OpettajaRepository) {
        this.repository = repository;
    }

  public lisääOpettaja(id: string, nimi: string, syntymäaika: Date, opetusala: string): Opettaja {
    const opettaja = new Opettaja(id, nimi, syntymäaika, opetusala);
    this.repository.lisääOpettaja(opettaja);
    return opettaja;
  }

    public haeOpettaja(id: string): Opettaja | undefined {
        return this.repository.haeOpettaja(id);
    }

    public haeKaikkiOpettajat(): Opettaja[] {
        return this.repository.haeKaikkiOpettajat();
    }

    public päivitäOpetusala(id: string, uusiOpetusala: string): boolean {
        const opettaja = this.repository.haeOpettaja(id);
        if (opettaja) {
            opettaja.vaihdaOpetusala(uusiOpetusala);
            return this.repository.päivitäOpettaja(opettaja);
        }
        return false;
    }

    public poistaOpettaja(id: string): boolean {
        return this.repository.poistaOpettaja(id);
    }

    public haeOpettajatOpetusalalta(opetusala: string): Opettaja[] {
        return this.repository.haeOpettajatOpetusalalta(opetusala);
    }
}