var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Worker2 = /** @class */ (function (_super) {
    __extends(Worker2, _super);
    function Worker2(fullname, age, id, sex) {
        return _super.call(this, fullname, age, id, sex) || this;
    }
    Object.defineProperty(Worker2.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (salary) {
            this._salary = salary > 0 ? salary : 0;
        },
        enumerable: true,
        configurable: true
    });
    Worker2.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("Salary: " + this.salary + "<br/>");
    };
    return Worker2;
}(Person));
//# sourceMappingURL=Worker2.js.map