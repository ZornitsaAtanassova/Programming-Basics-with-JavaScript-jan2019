function timePluseMinets(input) {
    let hours = Number(input.shift());
    let mins = Number(input.shift());

    let totalMins = hours * 60 + mins + 15;

    let finalHours = Math.floor(totalMins / 60);
    let finalMins = totalMins % 60;
    
    if (finalHours === 24) {
        // preobrazuvame 24 chasà v 0 chasà za printiraneto.
        finalHours -= 24;
    }

    if (finalMins < 10) {
        console.log(`${finalHours}:0${finalMins}`);
    } else {
        console.log(`${finalHours}:${finalMins}`);
    }
}

timePluseMinets(["1", "46"]);      //2:01
timePluseMinets(["0", "01"]);      //0:16
timePluseMinets(["23", "59"]);      //0:14
timePluseMinets(["11", "08"]);      //11:23
timePluseMinets(["12", "49"]);      //13:04
