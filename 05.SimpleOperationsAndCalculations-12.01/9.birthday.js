function birthday(input) {
    // !!!Parallelepiped - is a three-dimensional figure formed by 6 parallel faces(usporedni steni), 12 edges(ryba) and 8 vertices(vyrha).
    // !!!1 liter of water = 1000 cubic CENTImeters = 1 cubic DECImeter

    // Knowns: -Thear is aquarium with dimensions: Length, Width, Height in cm.
    // Knowns: -A certain percentage of its capacity is occupied by sand, plants, heater and pump.
    // Wanted: -To calculate how many liters of water will collect(sybira) the aquarium?

    let aquariumLength = Number(input.shift());
    let aquariumWidth = Number(input.shift());
    let aquariumHeight = Number(input.shift());
    let percent = Number(input.shift());

    let capacity = aquariumLength * aquariumWidth * aquariumHeight;     // Obem na aqariuma
    //console.log(capacity);
    let totalLiters = capacity * 0.001;
    //console.log(totalLiters);
    let calculatePercent = percent * 0.01;  // Convert input number to percents
    //console.log(calculatePercent);
    let resultNeeded = totalLiters * (1 - calculatePercent);
    //console.log(resultNeeded);
    console.log(resultNeeded.toFixed(3));
}

birthday([85, 75, 47, 17]);