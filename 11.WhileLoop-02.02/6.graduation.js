function graduation(input) {
    //Knowns: -Passed if Annual assessment >=4 grade
    //Knowns: -Repeated if Annual assessment <4 grade
    //Wanted: -To calculate the average grade of the student from all his training (1-12 grade).

    //Read first input
    let studentName = input.shift();

    //Auxiliary variables
    let counter = 1;    //For 12 iterations => start number: 0-11 or 1-12, 2-13, 3-14, ....
    let sumAllGrade = 0;

    //Manipulate
    while (counter <= 12) {
        //Read remaining input
        let studentGrade = Number(input.shift());
        if (studentGrade >= 4) {
            sumAllGrade += studentGrade;
            //console.log(`Iteration/Year ${counter}: Student:${studentName}; Grade:${studentGrade}; Sum so far:${sumAllGrade}`);
            counter++;
        }
        /* console.log(studentGrade +" - "+ counter);
        counter++; */
    }
    let averageGrade = sumAllGrade / 12;

    //Print
    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

graduation(["Zori", "4", "5.5", "6", "5.43", "4.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);     //Zori graduated. Average grade: 5.37
graduation(["Vasko", "5", "5.3", "2", "6", "5.4", "3", "5", "6", "5.5", "4.5", "5", "5", "6", "5.5", "6", "6"]);     //Vasko graduated. Average grade: 5.45
