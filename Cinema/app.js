var cinema1 = new Cinema("Darkest Hour", 125, "Anthony McCarten", 50, 40);
var person1 = new Array(cinema1.numOfSpectators);
var numOfWorkers = 0, numOfStudents = 0, numOfTeachers = 0, sum = 0;
initiateArray(person1);
//document.write(`The revenue of the film: ${cinema1.movieName}`)
Revenue(person1, cinema1);
function initiateArray(p) {
    for (var i = 0; i < person1.length; i++) {
        switch (Math.round(Math.random() * 2)) {
            case 0:
                p[i] = new Student("Bob Dillen", 25, "029887772", "M");
                continue;
            case 1:
                p[i] = new Teacher("Alice Monroe", 35, "060097772", "F");
                continue;
            case 2: p[i] = new Worker2("Douglas Mortimer", 45, "098777772", "M");
        }
    }
}
function Revenue(p, c) {
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var i = p_1[_i];
        if (i instanceof Worker2) {
            sum += cinema1.moviePrice;
            numOfWorkers++;
        }
        else if (i instanceof Student) {
            sum += cinema1.moviePrice * (1 - cinema1.studentDiscount / 100);
            numOfStudents++;
        }
        else {
            sum += cinema1.moviePrice * (1 - cinema1.teacherDiscount / 100);
            numOfTeachers++;
        }
    }
    document.write("The total revenue of the film: " + cinema1.movieName + " is: " + sum + "<br/>");
    document.write("The price of a ticket is: " + cinema1.moviePrice + "<br/>");
    document.write("The total number of spectators is: " + cinema1.numOfSpectators + "<br/>");
    document.write("The number of spectators who are students is: " + numOfStudents + "<br/>");
    document.write("The number of spectators who are teachers is: " + numOfTeachers + "<br/>");
    document.write("The number of spectators who are workers is: " + numOfWorkers + "<br/>");
}
//# sourceMappingURL=app.js.map