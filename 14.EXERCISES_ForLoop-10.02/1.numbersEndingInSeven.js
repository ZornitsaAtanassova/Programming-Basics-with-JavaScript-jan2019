function numbersEndingInSeven(input) {
    // x%10=x(ost7) / 7%10=0(ost7); 67%10=6(ost7); 697%10=69(ost7)

    for (let i = 1; i <= 1000; i++) {
        if (i % 10 == 7) {
            console.log(i);
        }
    }
}

numbersEndingInSeven();
