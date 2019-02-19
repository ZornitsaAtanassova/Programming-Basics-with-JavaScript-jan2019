function moving(input) {
    //Knowns: -Box size = 1mX1mX1m
    //Wanted: -To calculate the free volume of José's home that stays after transferring his luggage.

    //Read input - the first three for dimensin of free space in flat
    let widthFreeSpase = Number(input.shift());     //1-1000
    let lengthFreeSpase = Number(input.shift());
    let hightFreeSpase = Number(input.shift());
    
    //Manipulate
    let freeSpace = widthFreeSpase * lengthFreeSpase * hightFreeSpase;
    //console.log(freeSpace +" Cubic meters free space");

    //Auxiliary variables
    let totalBoxesSpace = 0;
    let spaceDiff = 0;
     
    //Read input - remaining for searching string command - Done or boxes count
    let commandDone = input.shift();
    while (commandDone != "Done") {
        let boxSpace = Number(commandDone);
        totalBoxesSpace += boxSpace;
        spaceDiff = Math.abs(totalBoxesSpace - freeSpace);
        //console.log(`Box Space: ${boxSpace}; Total Boxes Space: ${totalBoxesSpace}; Space Differrent: ${spaceDiff}`);
        if (totalBoxesSpace >= freeSpace) {
            console.log(`No more free space! You need ${spaceDiff} Cubic meters more.`);
            break;
        }
        commandDone = input.shift();
    }

    if (commandDone === "Done") {
        console.log(`${spaceDiff} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);     //No more free space! You need 2 Cubic meters more.
moving(["10", "1", "2", "4", "6", "Done"]);     //10 Cubic meters left.
