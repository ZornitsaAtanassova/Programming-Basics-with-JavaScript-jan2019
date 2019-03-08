function hotelRoom(input) {
    //Read inputs
    let month = input.shift();  //May, June, July, August, September, October.
    let nightsCount = Number(input.shift());

    //Global vars
    let apartmentOneNightPrice = 0;
    let studioOneNightPrice = 0;
    let allNightsApartmentPrice = 0;
    let allNightsStudioPrice = 0;

    if (month === "May" || month === "October") {
        apartmentOneNightPrice = 65;
        studioOneNightPrice = 50;
        //console.log(apartmentOneNightPrice +" / "+ studioOneNightPrice);
        if (nightsCount > 14) {
            apartmentOneNightPrice -= apartmentOneNightPrice * 0.10;
            studioOneNightPrice -= studioOneNightPrice * 0.30;
        } else if (nightsCount > 7) {
            studioOneNightPrice -= studioOneNightPrice * 0.05;
        }
        allNightsApartmentPrice =  apartmentOneNightPrice * nightsCount;
        allNightsStudioPrice = studioOneNightPrice * nightsCount;
        //console.log(allNightsApartmentPrice +" / "+ allNightsStudioPrice);
        console.log(`Apartment: ${allNightsApartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${allNightsStudioPrice.toFixed(2)} lv.`);
    } else if (month === "June" || month === "September") {
        apartmentOneNightPrice = 68.70;
        studioOneNightPrice = 75.20;
        if (nightsCount > 14) {
            apartmentOneNightPrice -= apartmentOneNightPrice * 0.10;
            studioOneNightPrice -= studioOneNightPrice * 0.20;
        }
        allNightsApartmentPrice =  apartmentOneNightPrice * nightsCount;
        allNightsStudioPrice = studioOneNightPrice * nightsCount;
        console.log(`Apartment: ${allNightsApartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${allNightsStudioPrice.toFixed(2)} lv.`);
    } else if (month === "July" || month === "August") {
        apartmentOneNightPrice = 77;
        studioOneNightPrice = 76;
        if (nightsCount > 14) {
            apartmentOneNightPrice -= apartmentOneNightPrice * 0.10;
        }
        allNightsApartmentPrice =  apartmentOneNightPrice * nightsCount;
        allNightsStudioPrice = studioOneNightPrice * nightsCount;
        console.log(`Apartment: ${allNightsApartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${allNightsStudioPrice.toFixed(2)} lv.`);
    }
}

hotelRoom(["May", "15"]);   //Apartment: 877.50 lv.    Studio: 525.00 lv.
hotelRoom(["June", "14"]);   //Apartment: 961.80 lv.    Studio: 1052.80 lv.
