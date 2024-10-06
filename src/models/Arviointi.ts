export class Arviointi {
    private arviointiId: string;
    private kurssiId: string;
    private opiskelijaId: string;
    private arvosana: number;
    private päivämäärä: Date;

    constructor(arviointiId: string, kurssiId: string, opiskelijaId: string, arvosana: number, päivämäärä: Date) {
        this.arviointiId = arviointiId;
        this.kurssiId = kurssiId;
        this.opiskelijaId = opiskelijaId;
        this.arvosana = arvosana;
        this.päivämäärä = päivämäärä;
    }

    public getId(): string {
        return this.arviointiId;
    }

    public setId(id: string): void {
        this.arviointiId = id
    }

    public getKurssiId(): string {
        return this.kurssiId;
    }

    public setKurssiId(id: string): void {
        this.kurssiId = id;
    }

    public getOpiskelijaId(): string {
        return this.opiskelijaId;
    }

    public setOpiskelijaId(id: string): void {
        this.opiskelijaId = id;
    }

    public getArvosana(): number {
        return this.arvosana;
    }

    public setArvosana(arvosana: number): void {
        this.arvosana = arvosana;
    }

    public getPäivämäärä(): Date {
        return this.päivämäärä;
    }

    public setPäivämäärä(päivämäärä: Date): void {
        this.päivämäärä = päivämäärä;
    }

    public muutaArvosana(uusiArvosana: number): void {
        this.arvosana = uusiArvosana;
    }

    public päivitäPäivämäärä(uusiPäivämäärä: Date): void {
        this.päivämäärä = uusiPäivämäärä;
    }
}