function fruitShop(input) {
    //Read
    let fruit = (input.shift()).toLowerCase();
    let weekDay = (input.shift()).toLowerCase();
    let quantity = Number(input.shift());  
    
    //Manipulate
    let price = 0;
    
    if (weekDay === "monday" || weekDay === "tuesday" || weekDay === "wednesday" || weekDay === "thursday" || weekDay === "friday") {
        switch (fruit) {
            case "banana":
            price = 2.50 * quantity;
            console.log(price.toFixed(2));
            break;
            
            case "apple":
            price = 1.20 * quantity;
            console.log(price.toFixed(2));
            break;
        
            case "orange":
            price = 0.85 * quantity;
            console.log(price.toFixed(2));
            break;
            
            case "grapefruit":
            price = 1.45 * quantity;
            console.log(price.toFixed(2));
            break;
            
            case "kiwi":
            price = 2.70 * quantity;
            console.log(price.toFixed(2));
            break;
            
            case "pineapple":
            price = 5.5 * quantity;
            console.log(price.toFixed(2));
            break;
            
            case "grapes":
            price = 3.85 * quantity;
            console.log(price.toFixed(2));
            break;
            
            default:
            console.log("error");
            break;
        }
    } else if (weekDay === "saturday" || weekDay === "sunday") {    
        switch (fruit) {    
            case "banana":
            price = 2.7 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            case "apple":    
            price = 1.25 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            case "orange":    
            price = 0.90 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            case "grapefruit":    
            price = 1.60 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            case "kiwi":    
            price = 3.00 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            case "pineapple":    
            price = 5.60 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            case "grapes":    
            price = 4.20 * quantity;    
            console.log(price.toFixed(2));
            break;
            
            default:    
            console.log("error");    
            break;
        }  
    } else {
        console.log("error");
    }
    
    
    // Alternative way
    /* if (weekDay === "monday" || weekDay === "tuesday" || weekDay === "wednesday" || weekDay === "thursday" || weekDay === "friday") {
        if (fruit === "banana") {
            price = quantity * 2.50;
        } else if (fruit === "apple") {
            price = quantity * 1.20;
        } else if (fruit === "orange") {
            price = quantity * 0.85;
        } else if (fruit === "grapefruit") {
            price = quantity * 1.45;
        } else if (fruit === "kiwi") {
            price = quantity * 2.70;
        } else if (fruit === "pineapple") {
            price = quantity * 5.50;
        } else if (fruit === "grapes") {
            price = quantity * 3.85;
        } else {
            console.log("error");
            return;
        }
        console.log(price.toFixed(2));
    } else if (weekDay === "saturday" || weekDay === "sunday") {
        if (fruit === "banana") {
            price = quantity * 2.70;
        } else if (fruit === "apple") {
            price = quantity * 1.25;
        } else if (fruit === "orange") {
            price = quantity * 0.90;
        } else if (fruit === "grapefruit") {
            price = quantity * 1.60;
        } else if (fruit === "kiwi") {
            price = quantity * 3.00;
        } else if (fruit === "pineapple") {
            price = quantity * 5.60;
        } else if (fruit === "grapes") {
            price = quantity * 4.20;
        } else {
            console.log("error");
            return;
        }
        console.log(price.toFixed(2));
    } else {
        console.log("error");
        return;
    } */
}

fruitShop(["apple", "Tuesday", "2"]);    //2.40
fruitShop(["orange", "Sunday", "3"]);    //2.70
fruitShop(["kiwi", "Monday", "2.5"]);    //6.75
fruitShop(["grapes", "Saturday", "0.5"]);    //2.10
fruitShop(["tomato", "Monday", "0.5"]);    //error
