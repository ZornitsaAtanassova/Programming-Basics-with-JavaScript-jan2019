function invalidNumber(input) {
    let number = Number(input.shift());

    if (!((number >= 100 && number <= 200) || number === 0)) {
        console.log("invalid");
    }
}

invalidNumber(["75"]);    //invalid
invalidNumber(["150"]);    //
invalidNumber(["220"]);    //invalid
invalidNumber(["199"]);    //
invalidNumber(["-1"]);    //invalid
invalidNumber(["100"]);    //
invalidNumber(["200"]);    //
invalidNumber(["0"]);    //
