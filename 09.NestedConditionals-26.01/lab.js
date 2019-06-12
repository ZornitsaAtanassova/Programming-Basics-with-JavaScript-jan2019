/* function demo(input) {
    // Pyrvo po-chestite sluchai da proverqvame - optimisation na procesorno nivo!

    let age = Number(input.shift());
    let gender = input.shift();

    if (gender === 'f') {
        if (age < 16) {
            console.log('Miss');
        } else {
            console.log('Ms.');
        }
    } else {
        if (age < 16) {
            console.log('Master');
        } else {
            console.log('Mister');
        }
    }
}

demo(["12", "f"]);
demo(["18", "f"]);
demo(["12", "m"]);
demo(["18", "m"]); */


/* function demo(input) {
    // nested switch-case and if-else

    let age = Number(input.shift());
    let gender = input.shift();

    switch (gender) {
        case 'f':
        if (age < 16) {
            console.log('Miss');
        } else {
            console.log('Ms.');
        }
        break;
        case 'm':
        if (age < 16) {
            console.log('Master');
        } else {
            console.log('Mister');
        }
        break;
        default:
        console.log('Unknown');
    }
}

demo(["12", "f"]);
demo(["18", "f"]);
demo(["12", "m"]);
demo(["18", "m"]);
demo(["12", "another"]); */


/* function demo(input) {
    //Read
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    //Manipulate
    let totalPrice = 0;     //Flag
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
}

demo(["coffee", "Sofia", "2"]);
demo(["water", "Sofia", "2"]);
demo(["beer", "Plovdiv", "2"]);
demo(["sweets", "Varna", "7"]); */


function demo(input) {
    //Read
    let age = Number(input.shift());
    let gender = input.shift();

    //Manipulate
    if (gender === 'm' && age < 16) {
        console.log('Master');
    } else if (gender === 'm' && age > 16) {
        console.log('Mister');
    }

    //Print
}

demo(["12", "f"]);
demo(["18", "f"]);
demo(["12", "m"]);
demo(["18", "m"]);
