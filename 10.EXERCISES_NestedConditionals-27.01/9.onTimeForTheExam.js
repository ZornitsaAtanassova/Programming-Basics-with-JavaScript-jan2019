function onTimeForTheExam(input) {
    //Knowns: -On time: Arrived at the exam hour or half an hour before
    //Knowns: -Early: Arrived half an hour before
    //Knowns: -Late: Arrived after the exam hour

    //Read
    let examHour = Number(input.shift());   //[0-23]
    let examMins = Number(input.shift());   //[0-59]
    let arrivedHour = Number(input.shift());
    let arrivedMins = Number(input.shift());

    //Manipulate
    let examTotalMins = examHour * 60 + examMins;
    let arrivedTotalMins = arrivedHour * 60 + arrivedMins;
    let result = examTotalMins - arrivedTotalMins;

    if (result >= 0 && result <= 30) {
        console.log("On time");
        console.log(`${result} minutes before the start`);
    } else if (result < 0) {
        console.log("Late");
        let hours = Math.floor(Math.abs(result) / 60);
        let mins = Math.abs(result) % 60;
        if (hours === 0) {
            console.log(`${mins} minutes after the start`);
        } else if (mins < 10) {
            console.log(`${hours}:0${mins} hours after the start`);
        } else {
            console.log(`${hours}:${mins} hours after the start`);
        }
    } else {
        console.log("Early");
        let hours = Math.floor(result / 60);
        let mins = result % 60;
        if (mins < 10) {
            console.log(`${hours}:0${mins} hours before the start`);
        } else if (result < 60) {
            console.log(`${mins} minutes before the start`);
        } else {
            console.log(`${hours}:${mins} hours before the start`);
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"]);   //Late 20 minutes after the start
onTimeForTheExam(["9", "00", "8", "30"]);   //On time 30 minutes before the start
onTimeForTheExam(["16", "00", "15", "00"]);   //Early 1:00 hours before the start
onTimeForTheExam(["9", "00", "10", "30"]);   //Late 1:30 hours after the start
onTimeForTheExam(["14", "00", "13", "55"]);   //On time 5 minutes before the start
onTimeForTheExam(["11", "30", "8", "12"]);   //Early 3:18 hours before the start
onTimeForTheExam(["10", "00", "10", "00"]);   //On time
onTimeForTheExam(["11", "30", "10", "55"]);   //Early 35 minutes before the start
onTimeForTheExam(["11", "30", "12", "29"]);   //Late 59 minutes after the start
