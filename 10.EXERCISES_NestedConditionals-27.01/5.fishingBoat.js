function fishingBoat(input) {
    //Knowns: -The price of renting the ship on seasons: "Spring"-3000lv, "Summer"/"Autumn"-4200lv, "Winter"-2600lv.
    //knowns: -Discount for number of fishermen: Up to 6=10%, 7-11=15%, Up 12=25%.
    //knowns: -Extra Discount for Even number of fishermen (without Autumn): Even=5%.
    //Wanted: -To calculate whether fishermen will raise enough money for fishing with a ship.

    //Read
    let groupBudget = Number(input.shift());     //[1-8000]
    let season = input.shift();
    let countFishermen = Number(input.shift());     //[4-18]

    //Manipulate
    let currentSeasonPrice = 0;
    let discount = 0;
    let extraDiscount = 0;
    let totalPrice = 0;

    if (season === "Spring") {
        currentSeasonPrice = 3000;
        if (countFishermen <= 6) {
            discount = currentSeasonPrice * 0.10;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        } else if (countFishermen >= 7 && countFishermen <= 11) {
            discount = currentSeasonPrice * 0.15;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        } else if (countFishermen >= 12) {
            discount = currentSeasonPrice * 0.25;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        }
    } else if (season === "Summer" || season === "Autumn") {
        currentSeasonPrice = 4200;
        if (countFishermen <= 6) {
            discount = currentSeasonPrice * 0.10;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        } else if (countFishermen >= 7 && countFishermen <= 11) {
            discount = currentSeasonPrice * 0.15;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        } else if (countFishermen >= 12) {
            discount = currentSeasonPrice * 0.25;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        }
    } else if (season === "Winter") {
        currentSeasonPrice = 2600;
        if (countFishermen <= 6) {
            discount = currentSeasonPrice * 0.10;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        } else if (countFishermen >= 7 && countFishermen <= 11) {
            discount = currentSeasonPrice * 0.15;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        } else if (countFishermen >= 12) {
            discount = currentSeasonPrice * 0.25;
            totalPrice = currentSeasonPrice - discount;
            //console.log(discount, totalPrice);
        }
    }

    if (countFishermen % 2 == 0 && season != "Autumn") {
        extraDiscount = currentSeasonPrice * 0.05;
        totalPrice = totalPrice - extraDiscount;
        //console.log(extraDiscount, totalPrice);
    }

    //Print
    if (groupBudget >= totalPrice) {
        let remainingAmount = groupBudget - totalPrice;
        console.log(`Yes! You have ${remainingAmount.toFixed(2)} leva left.`);
    } else if (groupBudget < totalPrice) {
        let necessaryAmount = totalPrice - groupBudget;
        console.log(`Not enough money! You need ${necessaryAmount.toFixed(2)} leva.`);
    }
}

//fishingBoat(["3000", "Spring", "14"]);
fishingBoat(["3000", "Summer", "11"]);    //Not enough money! You need 570.00 leva.
fishingBoat(["3600", "Autumn", "6"]);    //Not enough money! You need 180.00 leva.
fishingBoat(["2000", "Winter", "13"]);    //Yes! You have 50.00 leva left.
