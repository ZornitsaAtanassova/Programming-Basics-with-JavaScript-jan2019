function worldSnookerChampionship(input) {
    //Read inputs
    let stage = input.shift();
    let ticketType = input.shift();
    let ticketNumber = Number(input.shift());
    let photo = input.shift();
    
    let tempPrice = 0;
    let totalPrice = 0;

    switch (stage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                tempPrice = ticketNumber * 55.50;
            } else if (ticketType === "Premium") {
                tempPrice = ticketNumber * 105.20;
            } else if (ticketType === "VIP") {
                tempPrice = ticketNumber * 118.90;
            }
        break;

        case "Semi final":
            if (ticketType === "Standard") {
                tempPrice = ticketNumber * 75.88;
            } else if (ticketType === "Premium") {
                tempPrice = ticketNumber * 125.22;
            } else if (ticketType === "VIP") {
                tempPrice = ticketNumber * 300.40;
            }
        break;

        case "Final":
            if (ticketType === "Standard") {
                tempPrice = ticketNumber * 110.10;
            } else if (ticketType === "Premium") {
                tempPrice = ticketNumber * 160.66;
            } else if (ticketType === "VIP") {
                tempPrice = ticketNumber *400;
            }
        break;
    }
    //console.log(tempPrice)

    if (tempPrice > 4000) {
        totalPrice = tempPrice - (tempPrice * 0.25);
    } else if (tempPrice > 2500) {
        if (photo === "Y") {
            totalPrice = (tempPrice - (tempPrice * 0.10)) + (ticketNumber * 40);
        } else if (photo === "N") {
            totalPrice = tempPrice - (tempPrice * 0.10);
        }
    } else {
        if (photo === "Y") {
            totalPrice = tempPrice + (ticketNumber * 40);
        } else if (photo === "N") {
            totalPrice = tempPrice;
        }
    }

    //Print
    console.log(totalPrice.toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);  //3012.38
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);  //2793.24
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);  //610.50
