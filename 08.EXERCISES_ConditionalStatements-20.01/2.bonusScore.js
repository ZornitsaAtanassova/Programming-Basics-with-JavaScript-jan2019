function bonusScope(input) {
    let score = Number(input.shift());
    let bonus = 0.0;

    if (score <= 100) {
        bonus = 5;
    } else if (score > 1000) {
        // Verify first 1000, because numbers bigger then 100 moze da sa bigger than 1000 i togava shte im se nachislqt 20%, a ne 10%.
        bonus = score * 0.1;
    } else if (score > 100) {
        bonus = score * 0.2;
    } 
    
    if (score % 2 === 0) {
        // verification for even number.
        bonus += 1;
    } else if (score % 10 === 5) {
        // verification for the number ends at 5.
        bonus += 2;
    }

    console.log(bonus);
    console.log(score + bonus);
}

bonusScope(["20"]);   //6 26
bonusScope(["175"]);   //37 212
bonusScope(["2703"]);   //270.3 2973.3
bonusScope(["15875"]);   //1589.5 17464.5
