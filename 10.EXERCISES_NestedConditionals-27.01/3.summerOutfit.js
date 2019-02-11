function summerOutfit(input) {
    //Knowns: -Degrees [10-42]
    //Knowns: -Time of day - Morning, Afternoon, Evening
    //Wanted: -To recommended Viktor what clothes to wear versus day-time and degrees!

    //Read
    let degrees = Number(input.shift());
    let timeOfDay = input.shift();

    //Manipulate
    let outfit;
    let shoes;

    switch (timeOfDay) {
        case "Morning": 
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
        break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
        break;
        case "Evening": 
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
        break;
    }

    // Alternative way - NOT WORKING???
    /* if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Mocasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay === "Morning" || timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (timeOfDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (degrees >= 25) {
        if (timeOfDay === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfDay === "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (timeOfDay === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } */

    //Print
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}. `);
}

summerOutfit(["16", "Morning"]);     //It's 16 degrees, get your Sweatshirt and Sneakers.
summerOutfit(["22", "Afternoon"]);     //It's 22 degrees, get your T-Shirt and Sandals.
summerOutfit(["28", "Evening"]);     //It's 28 degrees, get your Shirt and Moccasins.
