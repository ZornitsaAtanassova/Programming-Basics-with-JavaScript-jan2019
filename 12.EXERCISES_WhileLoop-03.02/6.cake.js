function cake(input) {
    let weight = Number(input.shift());
    let lenght = Number(input.shift());

    let piecesOfCake = weight * lenght;

    while (piecesOfCake > 0) {
        let takenPiecesOrCommand = input.shift();

        if (takenPiecesOrCommand === "STOP") {
            console.log(`${piecesOfCake} pieces are left.`);
            break;
        }

        piecesOfCake -= Number(takenPiecesOrCommand);
    }

    if (piecesOfCake <= 0) {
        console.log(`No more cake left! You need ${Math.abs(piecesOfCake)} pieces more.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);   //No more cake left! You need 1 pieces more.
cake(["10", "2", "2", "4", "6", "STOP"]);   //8 pieces are left.
