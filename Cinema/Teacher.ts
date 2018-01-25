
class Teacher extends Person {
    subject: string;
    private _seniority: number;

    constructor(fullname: string, age: number, id: string, sex: string) {
        super(fullname, age, id, sex);
    }

    set seniority(seniority:number) {
        this._seniority = seniority > 0 ? seniority : 0;
    }
    get seniority() {
        return this._seniority;
    }


    print(): void {
        super.print();
        document.write(`Subject: ${this.subject}<br/>Seniority: ${this.seniority}<br/>`);
    }
}
    
