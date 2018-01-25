var Cinema = /** @class */ (function () {
    function Cinema(moviename, movieduration, moviecreator, movieprice, numofspectators) {
        this.movieName = moviename;
        this.movieDuration = movieduration;
        this.movieCreator = moviecreator;
        this.moviePrice = movieprice;
        this.numOfSpectators = numofspectators;
        this.studentDiscount = Math.round(Math.random() * (20 - 10)) + 10;
        this.teacherDiscount = Math.round(Math.random() * (10 - 5)) + 5;
    }
    Object.defineProperty(Cinema.prototype, "movieDuration", {
        get: function () {
            return this._movieDuration;
        },
        set: function (movieduration) {
            this._movieDuration = movieduration > 0 ? movieduration : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "moviePrice", {
        get: function () {
            return this._moviePrice;
        },
        set: function (movieprice) {
            this._moviePrice = movieprice >= 30 && movieprice <= 200 ? movieprice : 40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "numOfSpectators", {
        get: function () {
            return this._numOfSpectators;
        },
        set: function (numofspectators) {
            this._numOfSpectators = numofspectators >= 10 && numofspectators <= 40 ? numofspectators : 10;
        },
        enumerable: true,
        configurable: true
    });
    return Cinema;
}());
//# sourceMappingURL=Cinema.js.map