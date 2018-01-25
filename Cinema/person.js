var Person = /** @class */ (function () {
    function Person(fullname, age, id, sex) {
        this.fullname = fullname;
        this.age = age;
        this.ID = id;
        this.sex = sex;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (Age) {
            this._age = Age >= 0 && Age <= 120 ? Age : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "ID", {
        set: function (id) {
            if (isNaN(Number(id)) || id.length != 9)
                this._ID = "INVALID ID";
            else
                this._ID = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (sex) {
            if (sex == "M" || sex == "F")
                this._sex = sex;
            else
                this._sex = "INVALID SEX";
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.print = function () {
        document.write("Full Name: " + this.fullname + "<br/>Age: " + this.age + "<br/>ID: " + this.ID + "<br/>Sex: " + this.sex + "<br/>");
    };
    return Person;
}());
//# sourceMappingURL=Person.js.map