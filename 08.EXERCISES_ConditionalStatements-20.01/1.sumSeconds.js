function sumSeconds(input) {
    // !!! 60sec = 1min

    let timeFirst = Number(input.shift());
    let timeSecond = Number(input.shift());
    let timeThird = Number(input.shift());

    let totalTime = timeFirst + timeSecond + timeThird;
    //console.log(totalTime);
    let minutes = Math.floor(totalTime / 60);
    //console.log(minutes);
    let seconds = totalTime % 60;
    //console.log(seconds);

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35", "45", "44"]);   //2:04
sumSeconds(["22", "7", "34"]);   //1:03
sumSeconds(["50", "50", "49"]);   //2:29
sumSeconds(["14", "12", "10"]);   //0:36
