export class Kurssi {
  private kurssiId: string;
  private nimi: string;
  private opintopisteet: number;
  private opettajaId: string;
  private osallistujat: Set<string>; // Opiskelijoiden ID:t
  kurssiRepository: any;

  constructor(
    kurssiId: string,
    nimi: string,
    opintopisteet: number,
    opettajaId: string
  ) {
    this.kurssiId = kurssiId;
    this.nimi = nimi;
    this.opintopisteet = opintopisteet;
    this.opettajaId = opettajaId;
    this.osallistujat = new Set();
  }

  public getId(): string {
    return this.kurssiId;
  }

  public setId(id: string): void {
    this.kurssiId = id;
  }

  public getNimi(): string {
    return this.nimi;
  }

  public setNimi(nimi: string): void {
    this.nimi = nimi;
  }

  public getOpintopisteet(): number {
    return this.opintopisteet;
  }

  public setOpintopisteet(opintopisteet: number): void {
    this.opintopisteet = opintopisteet;
  }

  public getOpettajaId(): string {
    return this.opettajaId;
  }

  public setOpettajaId(opettajaId: string): void {
    this.opettajaId = opettajaId;
  }

  public getOsallistujat(): string[] {
    return Array.from(this.osallistujat);
  }

  public setOsallistujat(osallistujat: string[]): this {
    this.osallistujat = new Set(osallistujat);
    return this;
  }

public lisääOsallistuja(opiskelijaId: string): Kurssi {
    this.osallistujat.add(opiskelijaId);
    return this;
}

  public poistaOsallistuja(opiskelijaId: string): void {
    this.osallistujat.delete(opiskelijaId);
  }

  public muutaOpintopisteitä(uudetPisteet: number): void {
    this.opintopisteet = uudetPisteet;
  }

  public vaihdaOpettaja(uusiOpettajaId: string): void {
    this.opettajaId = uusiOpettajaId;
  }

}
