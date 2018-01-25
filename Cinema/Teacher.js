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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fullname, age, id, sex) {
        return _super.call(this, fullname, age, id, sex) || this;
    }
    Object.defineProperty(Teacher.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (seniority) {
            this._seniority = seniority > 0 ? seniority : 0;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("Subject: " + this.subject + "<br/>Seniority: " + this.seniority + "<br/>");
    };
    return Teacher;
}(Person));
//# sourceMappingURL=Teacher.js.map