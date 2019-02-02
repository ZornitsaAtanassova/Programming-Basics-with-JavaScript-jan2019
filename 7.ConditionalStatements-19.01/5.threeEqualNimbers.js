function threeEqualNumbers(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let thirdNumber = Number(input.shift());

    // <1> === <2> and <2> === <3>
    if((firstNumber == secondNumber) && (secondNumber == thirdNumber)){
        console.log("yes");
    }else{
        console.log("no");
    }
    
    // Alterntive way
    // <1> === <2> and <1> === <3>
    /* let areNumberEqual = 'no';
    if (firstNumber !== secondNumber) {
        areNumberEqual = 'no';
    } else if (firstNumber !== thirdNumber) {
        areNumberEqual = 'no';
    } else {
        areNumberEqual = 'yes';
    }

    console.log(areNumberEqual); */
}

threeEqualNumbers(["1", "1", "1"]);     //yes
threeEqualNumbers(["5", "5", "5"]);     //yes
threeEqualNumbers(["1", "2", "3"]);     //no
threeEqualNumbers(["11", "8", "5"]);     //no
threeEqualNumbers(["13", "14", "99"]);     //no
