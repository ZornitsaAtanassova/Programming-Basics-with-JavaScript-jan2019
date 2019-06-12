function skiTrip(input){
    //Read
    let days = Number(input.shift()); 
    let place = (input.shift()).toLowerCase(); 
    let rate = (input.shift()).toLowerCase();

    //Manipulate
    let nights = days - 1;
    let discount = 0; 
    let priceWithDiscount = 0;
    let totalPrice = 0;
    
    if (place === "room for one person") {
        priceWithDiscount = nights * 18;
    } else if (place === "apartment") {
        if (days > 1 && days < 10){
            discount = 0.30;
            priceWithDiscount = nights * 25 * (1 - discount);
        } else if (days >= 10 && days <= 15) {
            discount = 0.35;
            priceWithDiscount = nights * 25 * (1 - discount);
        } else if (days > 15){
            discount = 0.50;
            priceWithDiscount = nights * 25 * (1 - discount);
        }  
    } else if (place === "president apartment"){
        if (days > 1 && days < 10){
            discount = 0.10;
            priceWithDiscount = nights * 35 * (1 - discount);
        } else if (days >= 10 && days <= 15) {
            discount = 0.15;
            priceWithDiscount = nights * 35 * (1 - discount);
        } else if (days > 15){
            discount = 0.20;
            priceWithDiscount = nights * 35 * (1 - discount);
        } 
    }

    if (rate === "positive") {
            totalPrice = priceWithDiscount * (1 + 0.25);
        } else if (rate === "negative") {
            totalPrice = priceWithDiscount * (1 - 0.10);
    } 

    //print
    console.log(totalPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);   //264.06
skiTrip(["30", "president apartment", "negative"]);   //730.80
skiTrip(["12", "room for one person", "positive"]);   //247.50
skiTrip(["2", "apartment", "positive"]);   //21.88
