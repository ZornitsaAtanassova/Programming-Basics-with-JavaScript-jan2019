function divideWithoutRemainder(input) {
    let n = Number(input.shift());

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        //console.log(num);

        if (num % 2 == 0) {
            p1Count++;
        }
        if (num % 3 == 0) {
            p2Count++;
        }
        if (num % 4 == 0) {
            p3Count++;
        }
    }
    //console.log(p1Count +" "+ p2Count +" "+ p3Count);
    let p1 = p1Count / n * 100;
    let p2 = p2Count / n * 100;
    let p3 = p3Count / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

divideWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);     //70.00% 10.00% 50.00%
divideWithoutRemainder([3, 3, 6, 9]);     //33.33% 100.00% 0.00%
