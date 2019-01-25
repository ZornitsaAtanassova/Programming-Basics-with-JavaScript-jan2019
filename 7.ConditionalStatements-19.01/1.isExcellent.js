function isExcellent(input) {
    let grade = Number(input.shift());
    if(grade >= 5.50) {
        console.log("Excellent!");
    }
}

isExcellent(["6"]);     //Excellent!
isExcellent(["5"]);
isExcellent(["5.50"]);  //Excellent!
isExcellent(["5.49"]);