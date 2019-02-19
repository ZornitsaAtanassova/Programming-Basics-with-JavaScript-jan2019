function vowelsSum(input) {
    //Knowns: -Example volume of vowels alphabet: a=1, e=2, i=3, o=4, u=5

    //Read input
    let word = input[0];
    //console.log(word);

    //Global var
    let sumVowels = 0;

    for (let i = 0; i < word.length; i++) {
        //console.log(i);
        let letter = word[i];
        //console.log(letter);
        switch (letter) {
            case "a": sumVowels++; break;
            case "e": sumVowels += 2; break;
            case "i": sumVowels += 3; break;
            case "o": sumVowels += 4; break;
            case "u": sumVowels += 5; break;
            default: break;
        }
    }
    console.log(sumVowels);
}

vowelsSum(["hello"]);   //6
vowelsSum(["hi"]);   //3
vowelsSum(["bamboo"]);   //9
vowelsSum(["beer"]);   //4
