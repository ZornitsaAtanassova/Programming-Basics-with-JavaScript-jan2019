function highJump(input) {
    let goal = Number(input.shift());

    let tempHigh = goal - 30;
    let jumpHigh = 0;
    let jumpNumber = 0;
    let success = 'Jumping';   //[Yes||No]

    while(success !== "Yes" && success !== "No") {
        let retries = 0;

        while(retries <= 3) {
            jumpHigh = input.shift();
            //console.log(jumpHigh)
            jumpNumber++;
            retries++;

            if (jumpHigh > tempHigh) {
                if((jumpHigh > goal) && (tempHigh >= goal)) {
                    success = "Yes";
                    break;
                }
                tempHigh += 5;
                break;
            }

            if (retries === 3) {
                success = "No";
                break;
            }
            
        }
    }

    //Print
    if (success === "Yes") {
        console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpNumber} jumps.`);
    } else {
        console.log(`Tihomir failed at ${tempHigh}cm after ${jumpNumber} jumps.`);
    }
}

highJump([231, 205, 212, 213, 228, 229, 230, 235]);     //Tihomir succeeded, he jumped over 231cm after 7 jumps.
highJump([250, 225, 224, 225, 228, 231, 235, 234, 235]);     //Tihomir failed at 235cm after 8 jumps.
