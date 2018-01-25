
class Student extends Person {
    address: string;
    major: string;

    constructor(fullname:string, age:number, id:string, sex:string) {
        super(fullname, age, id, sex);
    }

    print(): void {
        super.print();
        document.write(`Study address: ${this.address}<br/>Major: ${this.major}<br/>`);
    }
    
}