function volleyball(input) {
    //Read inputs
    let leapYear = input.shift();   //leap, normal.
    let holidaysCount = Number(input.shift());
    let weekendsInHomeCount = Number(input.shift());

    //Global vars
    let gamesWeekendsInSofiq = (48 - weekendsInHomeCount) * (3.0 / 4);
    //console.log(weekendsInSofiq)
    let gamesWeekendsInHome = weekendsInHomeCount;
    //console.log(gamesWeekendsInHome)
    let gamesHolidays = holidaysCount * (2.0 / 3);
    //console.log(gamesHolidays)
    let gamesPerYear = gamesWeekendsInSofiq + gamesWeekendsInHome + gamesHolidays;
    //console.log(gamesPerYear)
    
    if (leapYear === "leap") {
        gamesPerYear += (gamesPerYear * 0.15);
        console.log(Math.floor(gamesPerYear));
    } else if (leapYear === "normal") {
        console.log(Math.floor(gamesPerYear));
    }
}

volleyball(["leap", "5", "2"]);     //45
volleyball(["normal", "3", "2"]);     //38
volleyball(["leap", "2", "3"]);     //43
volleyball(["normal", "11", "6"]);     //44
volleyball(["leap", "0", "1"]);     //41
volleyball(["normal", "6", "13"]);     //43
