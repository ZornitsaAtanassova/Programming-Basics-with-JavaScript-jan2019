function twoEqualWords(input) {
    let firstWord = input.shift();
    let secondWord = input.shift();

    firstWord = firstWord.toUpperCase();
    secondWord = secondWord.toUpperCase();
    /* // Alternative way
    firstWord = firstWord.toLowerCase();
    secondWord = secondWord.toLowerCase(); */

    if (firstWord == secondWord) {
        console.log("yes");
    }else {
        console.log("no");
    }
}

twoEqualWords(["Hello", "Hello"]);  //yes
twoEqualWords(["SoftUni", "softuni"]);  //yes
twoEqualWords(["Soft", "Uni"]);  //no
twoEqualWords(["beer", "vodka"]);  //no
twoEqualWords(["HeLlO", "hELLo"]);  //yes
