function multiplayTable(input) {
    let num = input.shift();

    let firstDigit = Number(num.toString().charAt(0));
    let secondDigit = Number(num.toString().charAt(1));
    let thirdDigit = Number(num.toString().charAt(2));
    //console.log(firstDigit + " " + secondDigit + " " + thirdDigit)

    for (let i = 1; i <= thirdDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                let multiplication = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${multiplication};`);
            }
        }
    }
}

multiplayTable([324]);
multiplayTable([222]);
