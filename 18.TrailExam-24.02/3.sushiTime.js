function sushiTime(input) {
    //Read input
    let typeSushi = input.shift();
    let restaurant = input.shift();
    let porcionCount = Number(input.shift());
    let orderDelivery = input.shift();

    let totalPrice = 0;
    switch (restaurant) {
        case "Sushi Zone":
        if (typeSushi === "sashimi") {
            totalPrice = porcionCount * 4.99;
        }
        if (typeSushi === "maki") {
            totalPrice = porcionCount * 5.29;
        }
        if (typeSushi === "uramaki") {
            totalPrice = porcionCount * 5.99;
        }
        if (typeSushi === "temaki") {
            totalPrice = porcionCount * 4.29;
        }
        break;

        case "Sushi Time":
        if (typeSushi === "sashimi") {
            totalPrice = porcionCount * 5.49;
        }
        if (typeSushi === "maki") {
            totalPrice = porcionCount * 4.69;
        }
        if (typeSushi === "uramaki") {
            totalPrice = porcionCount * 4.49;
        }
        if (typeSushi === "temaki") {
            totalPrice = porcionCount * 5.19;
        }
        break;

        case "Sushi Bar":
        if (typeSushi === "sashimi") {
            totalPrice = porcionCount * 5.25;
        }
        if (typeSushi === "maki") {
            totalPrice = porcionCount * 5.55;
        }
        if (typeSushi === "uramaki") {
            totalPrice = porcionCount * 6.25;
        }
        if (typeSushi === "temaki") {
            totalPrice = porcionCount * 4.75;
        }
        break;

        case "Asian Pub":
        if (typeSushi === "sashimi") {
            totalPrice = porcionCount * 4.50;
        }
        if (typeSushi === "maki") {
            totalPrice = porcionCount * 4.80;
        }
        if (typeSushi === "uramaki") {
            totalPrice = porcionCount * 5.50;
        }
        if (typeSushi === "temaki") {
            totalPrice = porcionCount * 5.50;
        }
        break;

        default:
        console.log(`${restaurant} is invalid restaurant!`);
        return;
        break;
    }

    if (orderDelivery === "Y") {
        totalPrice = totalPrice + (totalPrice * 0.20);
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    } else if (orderDelivery === "N") {
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`)
    }
}

sushiTime(["maki", "Sushi Zone", "4", "Y"]);
sushiTime(["temaki", "Asian Pub", "5", "N"]);
sushiTime(["maki", "Asian", "10", "Y"]);
