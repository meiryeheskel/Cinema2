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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullname, age, id, sex) {
        return _super.call(this, fullname, age, id, sex) || this;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("Study address: " + this.address + "<br/>Major: " + this.major + "<br/>");
    };
    return Student;
}(Person));
//# sourceMappingURL=Student.js.map