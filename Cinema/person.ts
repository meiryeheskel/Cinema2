
class Person {
    fullname: string;
    private _age: number;
    private _ID: string;
    private _sex: string;

    constructor(fullname: string,age:number,id:string,sex:string ) {
        this.fullname = fullname;
        this.age = age;
        this.ID = id;
        this.sex = sex;
    }

    set age(Age:number) {
        this._age = Age >= 0 && Age <= 120? Age : 0;
    }
    get age() {
        return this._age;
    }

    set ID(id:string) {
        if (isNaN(Number(id)) || id.length != 9)
            this._ID = "INVALID ID";
        else this._ID = id; 
    }

    set sex (sex) {
        if (sex == "M" || sex == "F") this._sex = sex;
        else this._sex = "INVALID SEX";
    }
    get sex() {
        return this._sex;
    }


    print(): void {
        document.write(`Full Name: ${this.fullname}<br/>Age: ${this.age}<br/>ID: ${this.ID}<br/>Sex: ${this.sex}<br/>`);

    }


}