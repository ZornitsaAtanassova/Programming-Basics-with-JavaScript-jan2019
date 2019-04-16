function vacantion(input) {
    let neededMoney = Number(input.shift());    //[1.00 - 25000.00]
    let initiallySavedMoney = Number(input.shift());     //[0.00 - 25000.00]

    //Global vars
    let counterDays = 0;
    let seriaSpendingDays = 0;

    while (initiallySavedMoney < neededMoney && seriaSpendingDays < 5) {
        let activity = input.shift();
        let activityMoney = Number(input.shift());
        
        if (activity === "save") {
            initiallySavedMoney += activityMoney;
            seriaSpendingDays = 0;
        }else if (activity === "spend") {
            initiallySavedMoney -= activityMoney;
            seriaSpendingDays++;
        }

        if (initiallySavedMoney <= 0) {
            initiallySavedMoney = 0;
        }

        counterDays++;
        //console.log(activity +" - "+ activityMoney)
        //initiallySavedMoney += 500
    }

    if (seriaSpendingDays === 5) {
        console.log("You can't save the money.");
        console.log(counterDays);
    }
    if (initiallySavedMoney >= neededMoney) {
        console.log(`You saved the money for ${counterDays} days.`);
    }
}

vacantion(["2000", "1000", "spend", "1200", "save", "2000"]);   //You saved the money for 2 days.
vacantion(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);   //You can't save the money. 5
vacantion(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);   //You saved the money for 4 days.

