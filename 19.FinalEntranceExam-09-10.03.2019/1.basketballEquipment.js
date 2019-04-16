function basketballEquipment(input) {
    let yearFee = Number(input.shift());

    let snickers = yearFee - (yearFee * 0.40);
    let equipment = snickers - (snickers * 0.20);
    let ball = equipment * 0.25; //equipment/4
    let accessories = ball * 0.20;

    let expenses = yearFee + snickers + equipment + ball +accessories;
    console.log(expenses.toFixed(2));
}

basketballEquipment([320]);    //711.68
basketballEquipment([550]);    //1223.20
basketballEquipment([230]);    //511.52
