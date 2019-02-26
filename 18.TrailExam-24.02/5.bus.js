function bus(input) {
    let initialPassengers = Number(input.shift());
    let busStations = Number(input.shift());

    let totalPassengers = initialPassengers;
    for (let i = 1; i <= busStations; i++) {
        let outPassengers = Number(input.shift());
        let inPassengers = Number(input.shift());

        totalPassengers = (totalPassengers - outPassengers) + inPassengers;

        if (i % 2 === 0) {
            totalPassengers -= 2;
        } else {
            totalPassengers += 2;
        }
    }

    console.log(`The final number of passengers is : ${totalPassengers}`);
}

bus([20, 2, 10, 5, 5, 3]);
bus([25, 5, 14, 15, 9, 11, 10, 13, 6, 7, 10, 8]);
bus([17, 3, 6, 7, 8, 9, 3, 4]);
