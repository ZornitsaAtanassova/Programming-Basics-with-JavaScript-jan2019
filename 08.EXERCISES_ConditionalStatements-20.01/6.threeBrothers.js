function threeBrother(input) {
    let firstBrotherTimeCleaning = Number(input.shift());
    let secondBrotherTimeCleaning = Number(input.shift());
    let thirdBrotherTimeCleaning = Number(input.shift());
    let fatherTimeFishing = Number(input.shift());

    let totalCleaningTime = 1 / (1 / firstBrotherTimeCleaning + 1 / secondBrotherTimeCleaning + 1 / thirdBrotherTimeCleaning);
    // Priemame, che tsialata rabota e = 1. Syotvetno rabotata na trimata bratq e chast ot tsialata.
    //console.log(totalCleaningTime);
    totalCleaningTime *= 1.15;
    //console.log(totalCleaningTime);

    console.log(`Cleaning time: ${totalCleaningTime.toFixed(2)}`);
    let timeLeft = fatherTimeFishing - totalCleaningTime;
    //console.log(timeLeft);
    
    if (timeLeft >= 0) {
        let result = Math.floor(timeLeft);
        console.log(`Yes, there is a surprise - time left -> ${result} hours.`);
    } else {
        let result = Math.ceil( Math.abs(timeLeft));
        // First Math.abs, because Math.abs(-0.7)=0.7 -> Math.ceil(0.7)=1. Otherwise Math.ceil(-0.7)=0 -> Math.abs(0)=0.
        console.log(`No, there isn't a surprise - shortage of time -> ${result} hours.`)
    }
}

threeBrother(["3", "4", "5", "3.6"]);     //Cleaning time: 1.47; Yes, there is a surprise - time left -> 2 hours.
threeBrother(["3.2", "2.5", "1.24", "0.5"]);     //Cleaning time: 0.76; No, there isn't a surprise - shortage of time -> 1 hours. 
