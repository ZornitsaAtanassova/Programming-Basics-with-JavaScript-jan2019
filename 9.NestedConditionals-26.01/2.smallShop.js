function smallShop(input) {
    //Read
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());
    let totalPrice = 0;     //Flag

    //Manipulate
    if (city === 'Sofia') {
        switch (product) {
            case 'coffee': 
                totalPrice = 0.50 * quantity;
            break;
            case 'water': 
                totalPrice = 0.80 * quantity;
            break;
            case 'beer': 
                totalPrice = 1.20 * quantity;
            break;
            case 'sweets': 
                totalPrice = 1.45 * quantity;
            break;
            case 'peanuts': 
                totalPrice = 1.60 * quantity;
            break;
        }
    } else if(city === 'Plovdiv') {
        switch (product) {
            case 'coffee': 
                totalPrice = 0.40 * quantity;
            break;
            case 'water': 
                totalPrice = 0.70 * quantity;
            break;
            case 'beer': 
                totalPrice = 1.15 * quantity;
            break;
            case 'sweets': 
                totalPrice = 1.30 * quantity;
            break;
            case 'peanuts': 
                totalPrice = 1.50 * quantity;
            break;
        }
    } else {
        switch (product) {
            case 'coffee': 
                totalPrice = 0.45 * quantity;
            break;
            case 'water': 
                totalPrice = 0.70 * quantity;
            break;
            case 'beer': 
                totalPrice = 1.10 * quantity;
            break;
            case 'sweets': 
                totalPrice = 1.35 * quantity;
            break;
            case 'peanuts': 
                totalPrice = 1.55 * quantity;
            break;
        }
    }
    
    //Print
    console.log(totalPrice);


    // Alternative way
    /* if (city === 'Sofia') {
        if (product === 'coffee') {
            totalPrice = quantity * 0.50;
        } else if (product === 'water') {
            totalPrice = quantity * 0.80;
        } else if (product === 'beer') {
            totalPrice = quantity * 1.20;
        } else if (product === 'sweets') {
            totalPrice = quantity * 1.45;
        } else if (product === 'peanuts') {
            totalPrice = quantity * 1.60;
        }
    } else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            totalPrice = quantity * 0.40;
        } else if (product === 'water') {
            totalPrice = quantity * 0.70;
        } else if (product === 'beer') {
            totalPrice = quantity * 1.15;
        } else if (product === 'sweets') {
            totalPrice = quantity * 1.30;
        } else if (product === 'peanuts') {
            totalPrice = quantity * 1.50;
        }
    } else if (city === 'Varna') {
        if (product === 'coffee') {
            totalPrice = quantity * 0.45;
        } else if (product === 'water') {
            totalPrice = quantity * 0.70;
        } else if (product === 'beer') {
            totalPrice = quantity * 1.10;
        } else if (product === 'sweets') {
            totalPrice = quantity * 1.35;
        } else if (product === 'peanuts') {
            totalPrice = quantity * 1.55;
        }
    }

    console.log(totalPrice); */
}

smallShop(["coffee", "Varna", "2"]);    //0.9
smallShop(["peanuts", "Plovdiv", "1"]);     //1.5
smallShop(["beer", "Sofia", "6"]);    //7.2
smallShop(["water", "Plovdiv", "3"]);    //2.1
smallShop(["sweets", "Sofia", "2.23"]);    //3.2335
