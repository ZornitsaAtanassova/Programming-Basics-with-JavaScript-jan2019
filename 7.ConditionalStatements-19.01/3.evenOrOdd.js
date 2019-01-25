function evenOrOdd(input) {
    let num1 = Number(input.shift());

    if(num1 % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

evenOrOdd(["2"]);   //even
evenOrOdd(["3"]);   //odd
evenOrOdd(["25"]);   //odd
evenOrOdd(["1024"]);   //even