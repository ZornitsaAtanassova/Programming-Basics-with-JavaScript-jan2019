function histogram(input) {
    let n = Number(input.shift());

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 0; i < n; i ++) {
        let num = Number(input[i]);

        if (num < 200) {
            p1Count++;
        } else if (num <= 399) {
            p2Count++;
        } else if (num <= 599) {
            p3Count++;
        } else if (num <= 799) {
            p4Count++;
        } else if (num >= 800) {
            p5Count++;
        }
    }

    let p1 = p1Count / n * 100;
    let p2 = p2Count / n * 100;
    let p3 = p3Count / n * 100;
    let p4 = p4Count / n * 100;
    let p5 = p5Count / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram([3, 1, 2, 999]);      //66.67% 0.00% 0.00% 0.00% 33.33%
histogram([4, 53, 7, 56, 999]);      //75.00% 0.00% 0.00% 0.00% 25.00%
histogram([7, 800, 801, 250, 199, 399, 599, 799]);      //14.29% 28.57% 14.29% 14.29% 28.57%
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);      //33.33% 33.33% 11.11% 11.11% 11.11%
histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);      //57.14% 14.29% 7.14% 14.29% 7.14%
