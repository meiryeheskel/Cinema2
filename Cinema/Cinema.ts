
class Cinema {
    movieName: string;
    private _movieDuration: number;
    movieCreator: string;
    private _moviePrice: number;
    private _numOfSpectators: number;
    readonly studentDiscount: number;
    readonly teacherDiscount: number;

    constructor(moviename:string,movieduration:number,moviecreator:string,movieprice:number,numofspectators:number) {
        this.movieName = moviename;
        this.movieDuration = movieduration;
        this.movieCreator = moviecreator;
        this.moviePrice = movieprice;
        this.numOfSpectators = numofspectators;
        this.studentDiscount = Math.round(Math.random() * (20 - 10)) + 10;
        this.teacherDiscount = Math.round(Math.random() * (10 - 5)) + 5;

    }
    set movieDuration (movieduration: number) {
        this._movieDuration = movieduration > 0 ? movieduration : 0;
    }
    get movieDuration() {
        return this._movieDuration;
    }
    set moviePrice(movieprice: number) {
        this._moviePrice = movieprice >= 30 && movieprice <= 200 ? movieprice : 40;
    }
    get moviePrice() {
        return this._moviePrice;
    }
    set numOfSpectators(numofspectators: number) {
        this._numOfSpectators = numofspectators >= 10 && numofspectators <= 40 ? numofspectators : 10;
    }
    get numOfSpectators() {
        return this._numOfSpectators;
    }

}