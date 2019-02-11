function accountBalance(input) {
    let n = Number(input.shift());
     
    let counter = 0;
    let balance = 0.0;

    while (counter < n) {
        let amount = Number(input.shift());
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        counter++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["3", "5.51", "69.42", "100"]);   //Increase: 5.51, Increase: 5.51, Increase: 5.51, Total: 174.93
accountBalance(["5", "120", "45.55", "-150"]);   //Increase: 120, Increase: 45.55, Invalid operation!, Total: 165.55
