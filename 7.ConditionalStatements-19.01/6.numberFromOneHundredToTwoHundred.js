function numberFromOneHundredToTwoHundred(input) {
    let num = Number(input.shift());

    if (num < 100){
        console.log("Less than 100");
    }else if (num <= 200){
        console.log("Between 100 and 200");
    }else {
        console.log("Greater than 200");
    }
}

numberFromOneHundredToTwoHundred(["95"]);   //Less than 100
numberFromOneHundredToTwoHundred(["120"]);   //Between 100 and 200
numberFromOneHundredToTwoHundred(["210"]);   //Greater then 200