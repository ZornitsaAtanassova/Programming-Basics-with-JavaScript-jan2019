function concatenateData(input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    let str = "You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".";    // Concatenation way
    console.log(str);

    //console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);   // Interpolation way
}

concatenateData(["Z", "A", "5", "Sofia"]);