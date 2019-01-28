function worldSwimmingRecord(input) {
    let currentRecord = Number(input.shift());
    let distance = Number(input.shift());
    let timePerOneMeter = Number(input.shift());

    let distanceTime = distance * timePerOneMeter;
    //console.log(distanceTime);
    let resistanceMeters = Math.floor(distance / 15);
    //console.log(resistanceMeters);
    let resistanceTime = resistanceMeters * 12.5;
    //console.log(resistanceTime);
    let totalTime = distanceTime + resistanceTime;
    //console.log(totalTime);

    if (currentRecord > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let deficientTime = totalTime - currentRecord;
        console.log(`No, he failed! He was ${deficientTime.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);      //No, he failed! He was 20786.00 seconds slower.
worldSwimmingRecord(["55555.67", "3017", "5.03"]);      //Yes, he succeeded! The new world record is 17688.01 seconds.
