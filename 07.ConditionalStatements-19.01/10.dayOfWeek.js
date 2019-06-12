function dayOfWeek(input) {
    let day = input.shift();

    switch (day) {
        case "1": {
            console.log("Monday");
            break;
        }
        case "2": {
            console.log("Tuesday");
            break;
        }
        case "3": {
            console.log("Wednesday");
            break;
        }
        case "4": {
            console.log("Thursday");
            break;
        }
        case "5": {
            console.log("Friday");
            break;
        }
        case "6": {
            console.log("Saturday");
            break;
        }
        case "7": {
            console.log("Sunday");
            break;
        }
        default: {
            console.log("Error");
            break;
        }
    }
}

dayOfWeek(["1"]);    //Mon
dayOfWeek(["2"]);    //Tue
dayOfWeek(["3"]);    //Wed
dayOfWeek(["4"]);    //Thu
dayOfWeek(["5"]);    //Fri
dayOfWeek(["6"]);    //Sat
dayOfWeek(["7"]);    //Sun
dayOfWeek(["-1fd"]);    //Error
