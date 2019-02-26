function bachelorParty(input) {
    //Read input
    let guestPerformerSum = Number(input.shift());
    let command = input.shift();

    //Global vars
    let couvert = 0;
    let guests = 0;

    while (command !== "The restaurant is full") {
        if (command < 5) {
            couvert += command * 100;
        } else {
            couvert += command * 70;
        }
        //console.log(command)
        guests += Number(command);
        command = input.shift();
    }
    //console.log(couvert)
    //console.log(guests)

    if (couvert >= guestPerformerSum) {
        let reminingSum = couvert - guestPerformerSum; 
        console.log(`You have ${guests} guests and ${reminingSum} leva left.`);
    } else {
        console.log(`You have ${guests} guests and ${couvert} leva income, but no singer.`);
    }
}

bachelorParty(["2800", "5", "5", "4", "6", "6", "12", "12", "The restaurant is full"]);
bachelorParty(["3200", "5", "12", "6", "6", "12", "The restaurant is full"]);
bachelorParty(["1800", "4", "4", "4", "4", "6", "6", "The restaurant is full"]);
