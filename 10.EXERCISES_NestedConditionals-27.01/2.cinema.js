function cinema(input) {
    //Read
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let income = 0;     //flag

    //Manipulate
    if (type === "Premiere") {
        income = rows * columns * 12.0;
    } else if (type === "Normal") {
        income = rows * columns * 7.50;
    } else if (type === "Discount") {
        income = rows* columns * 5.00;
    }

    //Print
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);      //1440.00 leva
cinema(["Normal", "21", "13"]);      //2047.50 leva
cinema(["Discount", "12", "30"]);      //1800.00 leva
