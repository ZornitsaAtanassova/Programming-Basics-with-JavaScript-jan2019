function newHouse(input) {
    //Knowns: -The price of the flowers: "Roses"-5lv, "Dahlias"-3.80lv, "Tulips"-2.80lv, "Narcissus"-3lv, "Gladiolus"-2.50lv;
    //Knowns: -Discount for more than: 80Roses=10%, 90Dahlias=15%, 80Tulips=15%;
    //Knowns: -Overcharge for less than: 120Narcissus=15%, 80Gladiolus=20%.
    //Wanted: -To calculate how much it will cost, plant a certain number of flowers, and whether the available budget will suffice?
    
    //Read
    let typeFlower = input.shift();
    let countFlower = Number(input.shift());    //[10-1000]
    let budget = Number(input.shift());     //[50-2500]

    //Manipulate
    let totalPrice = 0;
    let discountOvercharge = 0;

    if (typeFlower === "Roses") {
        totalPrice = countFlower * 5;
        if (countFlower > 80) {
            discountOvercharge = totalPrice * 0.10;
            totalPrice = totalPrice - discountOvercharge;
        }
    } else if (typeFlower === "Dahlias") {
        totalPrice = countFlower * 3.80;
        if (countFlower > 90) {
            discountOvercharge = totalPrice * 0.15;
            totalPrice = totalPrice - discountOvercharge;
        }
    } else if (typeFlower === "Tulips") {
        totalPrice = countFlower * 2.80;
        if (countFlower > 80) {
            discountOvercharge = totalPrice * 0.15;
            totalPrice = totalPrice - discountOvercharge;
        }
    } else if (typeFlower === "Narcissus") {
        totalPrice = countFlower * 3;
        if (countFlower < 120) {
            discountOvercharge = totalPrice * 0.15;
            totalPrice = totalPrice + discountOvercharge;
        }
    } else if (typeFlower === "Gladiolus") {
        totalPrice = countFlower * 2.50;
        if (countFlower < 80) {
            discountOvercharge = totalPrice * 0.20;
            totalPrice = totalPrice + discountOvercharge;
        }
    }

    //Print
    if (budget >= totalPrice) {
        let remainingAmount = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${remainingAmount.toFixed(2)} leva left.`);
    } else if (budget < totalPrice) {
        let necessaryAmount = totalPrice - budget;
        console.log(`Not enough money, you need ${necessaryAmount.toFixed(2)} leva more.`);
    }
}

newHouse(["Roses", "55", "250"]);     //Not enough money, you need 25.00 leva more.
newHouse(["Tulips", "88", "260"]);     //Hey, you have a great garden with 88 Tulips and 50.56 leva left.
newHouse(["Narcissus", "119", "360"]);     //Not enough money, you need 50.55 leva more.
