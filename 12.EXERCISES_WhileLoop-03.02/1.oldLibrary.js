function oldLibrary(input) {
    //Read input
     let favoriteBook = input.shift();
     let numberOfBooks = Number(input.shift());

    //Auxilary variables
    let counter = 0;
    let bookIsFound = false;

    //Manipulate
    let nextBookName = input.shift();
    while (counter < numberOfBooks) {
        if (nextBookName === favoriteBook) {
            bookIsFound = true;
            break;
        }
        counter++;
        nextBookName = input.shift();
    }
    if (bookIsFound == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${numberOfBooks} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
}

oldLibrary(["Troy", "8", "Stronger", "Life Style", "Troy"]);    //You checked 2 books and found it.
oldLibrary(["The Spot", "4", "Hunger Games", "Harry Potter", "Torronto", "Spotify"]);    //The book you search is not here! You checked 4 books.
oldLibrary(["Bourne", "32", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);    //You checked 10 books and found it.
