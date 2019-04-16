function examPreparation(input) {
    //Read inputs
    let badGradesCount = Number(input.shift());  //[1-5]
    let nameExerciseOrCommand = input.shift();
    let grade = Number(input.shift());

    //Global var - counters
    let counterExercises = 0;
    let counterForBadGrades = 0;
    let sumGrades = 0;
    let lastExercise = "";

    while ((badGradesCount > counterForBadGrades) || (nameExerciseOrCommand !== "Enough")) {
        //console.log(nameExerciseOrCommand + " - " + grade)

        if (grade <= 4) {
                counterForBadGrades++;
        }

        if (counterForBadGrades == badGradesCount) {
                console.log(`You need a break, ${badGradesCount} poor grades.`);
                break;
        }
        if (nameExerciseOrCommand === "Enough") {
            console.log(`Average score: ${(sumGrades / counterExercises).toFixed(2)}`);
            console.log(`Number of problems: ${counterExercises}`);
            console.log(`Last problem: ${lastExercise}`);
            break;
        }

        counterExercises++;
        sumGrades += grade;
        lastExercise = nameExerciseOrCommand;

        nameExerciseOrCommand = input.shift();
        grade = Number(input.shift());  
    }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);    //Average score: 5.25    Number of problems: 4     Last problem: Bus
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);    //You need a break, 2 poor grades.

