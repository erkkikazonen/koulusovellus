export class Opettaja {
    private opettajaId: string;
    private nimi: string;
    private syntymäaika: Date;
    private opetusala: string;
    private kurssit: string[];

        
    constructor(opettajaId: string, nimi: string, syntymäaika: Date, opetusala: string) {
        this.opettajaId = opettajaId;
        this.nimi = nimi;
        this.syntymäaika = syntymäaika;
        this.opetusala = opetusala;
        this.kurssit = [];
    }

    public getId(): string {
        return this.opettajaId;
    }

    public setId(id: string): void {
        this.opettajaId = id;
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

    public getOpetusala(): string {
        return this.opetusala;
    }

    public setOpetusala(opetusala: string): void {
        this.opetusala = opetusala;
    }

    public getKurssit(): string[] {
        return this.kurssit;
    }

    public setKurssit(kurssit: string[]): void {
        this.kurssit = kurssit;
    }

    public lisääKurssi(kurssi: string): this {
        this.kurssit.push(kurssi);
        return this;
    }

    public poistaKurssi(kurssi: string): void {
        const index = this.kurssit.indexOf(kurssi);
        if (index > -1) {
            this.kurssit.splice(index, 1);
        }
    }

    public vaihdaOpetusala(uusiAla: string): void {
        this.opetusala = uusiAla;
    }
}