function danceHall(input) {
    // !!! 1m = 100cm. 

    // Knowns: -The hall is rectangular, with dimensions: Length and Width in meters.
    // Knowns: -There is square Wardrobe with a side-A and rectangular Bench with an area of 10 times smaller than the area of the hall.
    // Knowns: -The place occupied by a dancer is 40 cm² and another 7,000 cm2 for dance.
    // Wanted: -To calculate how many dancers can fit in the room and move freely? Math.floor(result)!

    // Read
    let hallLength = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeSide = Number(input.shift());

    // Manipulate
    let hallArea =(hallLength * 100) * (hallWidth * 100);
    //console.log(hallArea);
    let wardrobeArea = (wardrobeSide *100) * (wardrobeSide * 100);
    let benchArea = hallArea / 10;

    let freeSpace = hallArea - wardrobeArea - benchArea;
    let dancersCount = Math.floor(freeSpace / (40 + 7000));     // Math.floor - rounding to LOWER value.
        
    // Print
    console.log(dancersCount);
}

danceHall([50, 25, 2]);