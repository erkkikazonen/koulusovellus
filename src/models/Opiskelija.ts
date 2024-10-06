export class Opiskelija {
  private opiskelijaId: string;
  private nimi: string;
  private syntymäaika: Date;
  private opintoOhjelma: string;
  private opintopisteet: number;

  constructor(
    opiskelijaId: string,
    nimi: string,
    syntymäaika: Date,
    opintoOhjelma: string
  ) {
    this.opiskelijaId = opiskelijaId;
    this.nimi = nimi;
    this.syntymäaika = syntymäaika;
    this.opintoOhjelma = opintoOhjelma;
    this.opintopisteet = 0;
  }

  public getId(): string {
    return this.opiskelijaId;
  }

  public setId(id: string): this {
    this.opiskelijaId = id;
    return this;
  }

  public getNimi(): string {
    return this.nimi;
  }

  public setNimi(nimi: string): void {
    this.nimi = nimi;
  }

  public getSyntymäaika(): Date {
    return this.syntymäaika;
  }

  public setSyntymäaika(syntymäaika: Date): void {
    this.syntymäaika = syntymäaika;
  }

  public getOpintoOhjelma(): string {
    return this.opintoOhjelma;
  }

  public setOpintoOhjelma(opintoOhjelma: string): void {
    this.opintoOhjelma = opintoOhjelma;
  }

  public getOpintopisteet(): number {
    return this.opintopisteet;
  }

  public setOpintopisteet(opintopisteet: number): void {
    this.opintopisteet = opintopisteet;
  }

  public lisääOpintopisteitä(pisteet: number): this {
    this.opintopisteet += pisteet;
    return this;
  }

  public vaihdaOpintoOhjelma(uusiOhjelma: string): void {
    this.opintoOhjelma = uusiOhjelma;
  }
}
