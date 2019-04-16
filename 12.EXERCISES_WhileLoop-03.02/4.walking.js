function walking(input) {
    let steps = 0;

    while (steps < 10000) {
        let stepsOrCommand = input.shift();

        if (stepsOrCommand === "Going home") {
            steps += Number(input.shift());
            if (steps >= 10000) {
                console.log("Goal reached! Good job!");
            } else {
                let diff = 10000 - steps;
                console.log(`${diff} more steps to reach goal.`);
                break;
            }
        } else {
            steps += Number(stepsOrCommand);
            if (steps >= 10000) {
                console.log("Goal reached! Good job!")
            }
        }
    }
}

walking(["1000", "1500", "2000", "6500"]);    //Goal reached! Good job!
walking(["1500", "300", "2500", "3000","Going home", "200"]);    //2500 more steps to reach goal.
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);    //Goal reached! Good job!
walking(["125", "250", "4000", "30", "2678", "4682"]);    //Goal reached! Good job!

