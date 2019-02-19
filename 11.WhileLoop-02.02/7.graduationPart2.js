function graduationPart2(input) {
    //Logical error in the exercise condition!!! See row 44.

    //Knowns: -Passed if Annual assessment >=4 grade
    //Knowns: -Repeated if Annual assessment <4 grade
    //Knowns: -Excluded if repeating year <=1 time
    //Wanted: -To calculate the average grade of the student from all his training (1-12 grade).

    //Read first input
    let studentName = input.shift();

    //Auxiliary variables
    let counter = 1;    //For 12 iterations => start number: 0-11(counter <= 11) or 1-12(counter <= 12), 2-13(counter <= 13), 3-14(counter <= 14), ....
    let sumAllGrade = 0;
    let isExcluded = false;
    let counterExcluded = 0;    //Excluding after second time: 0-1(counterExcluded >= 2) or 1-2(counterExcluded >= 3), -1-0(counterExcluded >= 1), ....

    //Manipulate
    while (counter <= 12) {
        //Read remaining input
        let studentGrade = Number(input.shift());
        if (studentGrade < 4) {
            //console.log(counterExcluded);
            counterExcluded++;
        }
        if (studentGrade >= 4) {
            sumAllGrade += studentGrade;
            //console.log(`Iteration/Year ${counter}: Student:${studentName}; Grade:${studentGrade}; Sum so far:${sumAllGrade}`);
            counter++;
        }
        /* console.log(studentGrade +" - "+ counter);
        counter++; */
        if (counterExcluded >= 2) {
            isExcluded = true;
            break;
        }
    }

    //Print
    if (isExcluded == false) {
        let averageGrade = sumAllGrade / 12;console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${counter} grade`);
        //console.log(`${studentName} has been excluded at ${++counter} grade`);
    }
}

graduationPart2(["Vasko", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);     //Vasko graduated. Average grade: 5.53
graduationPart2(["Zori", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);     //Zori has been excluded at 8(ili 9??) grade.
