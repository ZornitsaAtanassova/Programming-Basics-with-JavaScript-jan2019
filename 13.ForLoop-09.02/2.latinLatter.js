function latinLatter() {
    let firstLetterAsNumber = "a".charCodeAt(0);
    let lastLetterAsNumber = "z".charCodeAt(0);
    
    for (let i = firstLetterAsNumber; i <= lastLetterAsNumber; i++) {
        console.log(String.fromCharCode(i));
    }
}

latinLatter();
