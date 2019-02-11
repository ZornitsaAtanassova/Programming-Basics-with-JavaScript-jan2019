function numberSequence(input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let command = input.shift();

    while (command != "END") {
        let num = Number(command);
        if (num < minNumber) {
            minNumber = num;
        }
        if (num > maxNumber) {
            maxNumber = num;
        }
        command = input.shift();
    }

    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}

numberSequence(["10", "20", "304", "0", "50", "END"]);   //Max number: 304, Min number: 0
numberSequence(["250", "5", "2", "0", "100", "100", "0", "END"]);   //Max number: 1000, Min number: 0
