/* function demo() {
    let i = 0;
    let iteration = 0;
    while (i == 0) {
        console.log('SoftUni' + iteration++);
        if (i == 1) {
            break;
        }
    }
}

demo();   // Infinity loop */


/* function demo1() {
    let i = 0;
    let iteration = 0;
    while (i <= 10) {
        console.log('SoftUni' + i +' '+ iteration++);
        i--;
    }
}

demo1();   // Infinity loop, but in JS???, kogato broqcha stigne do nqkakvo??? naj-malko otricatelno chislo, after 4mlrd times, broqcha pak she se vyrne do 10. */


/* function demo2() {
    let i = 0;
    while (i < 6) {
        i++;
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

demo2();   // 2 4 6 */


/* function demo3() {
    let a = "a".charCodeAt(0);  // String function, which return the number value of given char (number in brackets).
    //console.log(a);
    while (a < 100) {
        console.log(a);
        console.log(String.fromCharCode(a));
        a++;
    }

    let b = 1454000;    //1509, 453, .....
    console.log(String.fromCharCode(b));
}

demo3();   // 97   97 a 98 b 99 c */


/* function demo4() {
    let array = ['test', 'text', 'SoftUni'];

    console.log(array);
    //dostypvane na element ot masiv
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}

demo4([]);   // ['test', 'text', 'SoftUni']  test  text  SoftUni */


/* function demo5() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    //console.log(i);   //Error
}

demo5();   // 0123456789 */


/* function demo6() {
    for (let i = 10; i <= 100; i += 10) {
        console.log(i);
    }
    //console.log(i);   //Error
}

demo6();   // 10 20 30 40 50 60 70 80 90 100 */


/* function demo7() {
    for (let i = 1; i <= 1024; i *= 2) {
        console.log(i);
    }
    console.log();
    for (let i = 20; i >= 0; i -= 2) {
        console.log(i);
    }
    console.log();
    for (let i = 17; i !== 0; i -= 3) {
        console.log(i);
        if (i < 0) {
            console.log("In negatives number");
            break;
        }
    }
}

demo7();   // */


/* function demo8() {
    let symbolAsNumber = "Text text".charCodeAt(3);
    console.log(symbolAsNumber + ' in Dec');

    let numberAsSymbol = String.fromCharCode(10000);
    console.log(numberAsSymbol + ' in char');
}

demo8();   //116 molivche */


/* function demo9() {
    let firstLetterAsNumber = "а".charCodeAt(0);
    let lastLetterAsNumber = "я".charCodeAt(0);
    
    for (let i = firstLetterAsNumber; i <= lastLetterAsNumber; i++) {
        console.log(String.fromCharCode(i));
    }
}

demo9();   // a ...z */



function oddEvenSum(input) {
    let arrayN = input.length;
    //console.log(arrayN);
    /* let sumEven = input[0]+input[2]+input[4]+input[6]+input[8];//0;
    let sumOdd = input[1]+input[3]+input[5]+input[7]+input[9];
    console.log(sumEven + " / " + sumOdd); */
    //let arrayN = input[0];
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 1; i < arrayN; i++) {
        //console.log(i);
        if (i % 2 == 0) {
            sumEven += input[i];
            //console.log(sumEven);
        } else {
            sumOdd += input[i];
        }
    }
    
    // Alternative way
    /* let counter = 0; //counter
    while (counter < arrayN) {
        if (counter % 2 == 0) {
            sumEven += input[counter];
            //console.log(sumEven);
        } else {
            sumOdd += input[counter];
        }
        counter++;
    } */

    if (sumEven == sumOdd) {
        console.log(`Yes Sum = ${sumEven}`);
    } else {
        let diff = Math.abs(sumEven - sumOdd);
        console.log(`No Diff = ${diff}`);
    }
}

oddEvenSum([10, 11, 25, 35]);
