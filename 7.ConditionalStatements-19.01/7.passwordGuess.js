function passwordGuess(input) {
    let password = input.shift();

    if (password == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }else {
        console.log("Wrong password!");
    }
}

passwordGuess(["qwerty"]);    //Wrong password!
passwordGuess(["s3cr3t!P@ssw0rd"]);    //Welcome
passwordGuess(["s3cr3t!p@ss"]);    //Wrong password!
