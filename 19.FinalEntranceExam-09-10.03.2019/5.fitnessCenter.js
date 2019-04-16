function fitnesCenter(input) {
    let countVisitors = Number(input.shift());

    //Global vars - groups activity
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (let i = 0; i < countVisitors; i++) {
        let activity = input.shift();
        //console.log(activity)
        switch (activity) {
            case "Back":
            back++;
            break;
            case "Chest":
            chest++;
            break;
            case "Legs":
            legs++;
            break;
            case "Abs":
            abs++;
            break;
            case "Protein shake":
            proteinShake++;
            break;
            case "Protein bar":
            proteinBar++;
            break;
        }
    }

    let workOut = ((back + chest + legs + abs) / countVisitors) * 100;
    let protein = ((proteinShake + proteinBar) / countVisitors) * 100;
    //Print
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workOut.toFixed(2)}% - work out`);
    console.log(`${protein.toFixed(2)}% - protein`);
}

fitnesCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);     //
fitnesCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);
