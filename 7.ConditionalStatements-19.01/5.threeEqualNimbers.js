function threeEqualNumbers(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());
    
    if((num1 == num2) && (num2 == num3)){
        console.log("yes");
    }else{
        console.log("no");
    }
}

threeEqualNumbers(["1", "1", "1"]);     //yes
threeEqualNumbers(["5", "5", "5"]);     //yes
threeEqualNumbers(["1", "2", "3"]);     //no
threeEqualNumbers(["11", "8", "5"]);     //no
threeEqualNumbers(["13", "14", "99"]);     //no