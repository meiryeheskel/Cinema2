
class Worker2 extends Person {
    private _salary: number;
    
    constructor(fullname: string, age: number, id: string, sex:string) {
          super(fullname,age,id,sex);

    }
      set salary(salary) {
          this._salary = salary > 0 ? salary : 0;
      }
      get salary() {
          return this._salary;
      }

    print(): void {
        super.print();
        document.write(`Salary: ${this.salary}<br/>`);
    }
}