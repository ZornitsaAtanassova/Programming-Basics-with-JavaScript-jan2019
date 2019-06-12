function speedInfo(input) {
    let speed = Number(input.shift());

    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

speedInfo(["8"]);    //slow
speedInfo(["49.5"]);    //average
speedInfo(["126"]);    //fast
speedInfo(["160"]);    //ultra fast
speedInfo(["3500"]);    //extremely fast
