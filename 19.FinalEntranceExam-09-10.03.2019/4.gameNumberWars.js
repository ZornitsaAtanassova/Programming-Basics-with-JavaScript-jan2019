function gameNumberWars(input) {
    //Read first and second inputs
    let firstPlayerName = input.shift();
    let secondPlayerName = input.shift();

    let temp = "";
    let stopCommand = "";
    let firstPlayerCard = 0;
    let secondPlayerCard = 0;
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let war1 = 0;
    let war2 = 0;
    let war = 0;

    while (stopCommand !== "End of game") {
        temp = input.shift();
        if (temp === "End of game") {
            stopCommand = temp;
            continue;
        } else {
            firstPlayerCard = Number(temp);  
        }

        temp = input.shift();
        if (temp === "End of game") {
            stopCommand = temp;
            continue;
        } else {
            secondPlayerCard = Number(temp);  
        }
        
        //----------------------------
        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (firstPlayerCard < secondPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else {
            war1 = Number(input.shift());
            war2 = Number(input.shift());
            war = 1;
            stopCommand = "End of game";
        }
    }

    if (war === 1) {
        console.log("Number wars!");
        if (war1 > war2) {
            console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
        } else {
            console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
        }
    } else {
        console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
    }
}

gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);   //Number wars!   Desi is winner with 2 points
gameNumberWars(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);   //Elena has 3 points        Simeon has 4 points
gameNumberWars(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);   //Number wars!   Aleks is winner with 2 points
