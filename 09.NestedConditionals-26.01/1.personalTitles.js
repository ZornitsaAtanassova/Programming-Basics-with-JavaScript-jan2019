function personalTitles(input) {
    // Pyrvo po-chestite sluchai da proverqvame - optimisation na procesorno nivo!

    let age = Number(input.shift());
    let gender = input.shift();

    if (gender === 'f') {
        if (age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else {
        if (age >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }

    // Alternative way
    /* if (gender === 'm' && age < 16) {
        console.log('Master');
    } else if (gender === 'm' && age >= 16) {
        console.log('Mr.');
    }

    if (gender === 'f' && age < 16) {
        console.log('Miss');
    } else if (gender === 'f' && age >= 16) {
        console.log('Ms.');
    } */
}

personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);
