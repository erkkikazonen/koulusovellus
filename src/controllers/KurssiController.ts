import { Kurssi } from "../models/Kurssi";
import { KurssiRepository } from "../repositories/KurssiRepository";

export class KurssiController {
  private repository: KurssiRepository;

  constructor(repository: KurssiRepository) {
    this.repository = repository;
  }

  public haeKurssi(id: string): Kurssi | undefined {
    return this.repository.haeKurssi(id);
  }

  public haeKaikkiKurssit(): Kurssi[] {
    return this.repository.haeKaikkiKurssit();
  }

  public päivitäKurssi(kurssi: Kurssi): boolean {
    return this.repository.päivitäKurssi(kurssi);
  }

  public poistaKurssi(id: string): boolean {
    return this.repository.poistaKurssi(id);
  }

  public haeKurssitOpettajalta(opettajaId: string): Kurssi[] {
    return this.repository.haeKurssitOpettajalta(opettajaId);
  }

  public haeKurssitOpintopisteillä(
    minPisteet: number,
    maxPisteet: number
  ): Kurssi[] {
    return this.repository
      .haeKaikkiKurssit()
      .filter(
        (kurssi) =>
          kurssi.getOpintopisteet() >= minPisteet &&
          kurssi.getOpintopisteet() <= maxPisteet
      );
  }
  public lisääOsallistujaKurssille(
    kurssiId: string,
    opiskelijaId: string
  ): void {
    const kurssi = this.repository.haeKurssi(kurssiId);
    if (kurssi) {
      kurssi.lisääOsallistuja(opiskelijaId);
      this.repository.päivitäKurssi(kurssi);
    } else {
      throw new Error("Kurssia ei löytynyt");
    }
  }
  public lisääKurssi(
    id: string,
    nimi: string,
    opintopisteet: number,
    opettajaId: string
  ): Kurssi {
    const kurssi = new Kurssi(id, nimi, opintopisteet, opettajaId);

    this.repository.lisääKurssi(kurssi);

    return kurssi;
  }
}
