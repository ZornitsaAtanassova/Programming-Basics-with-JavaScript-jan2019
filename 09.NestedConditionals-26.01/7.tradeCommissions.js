function tradeCommissions(input) {
    //Knowns: -Commissions according to sales and city: Sofia(500=5%,1000=7%,10 000=8%,Up=12%); Varna(500=4.5%,1000=7.5%,10 000=10%,Up=13%); Plovdiv(500=5.5%,1000=8%,10 000=12%,Up=14.5%).

    //Read input
    let city = (input.shift()).toLowerCase();
    let sales = Number(input.shift());

    //Global var
    let commission = 0;

    switch (city) {
        case "sofia":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.08;
            } else if (sales > 10000) {
                commission = sales * 0.12;
            } else {
                console.log("error");
                return;
            }
            console.log(commission.toFixed(2));
        break;

        case "varna":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.10;
            } else if (sales > 10000) {
                commission = sales * 0.13;
            } else {
                console.log("error");
                return;
            }
            console.log(commission.toFixed(2));
        break;

        case "plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = sales * 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.12;
            } else if (sales > 10000) {
                commission = sales * 0.145;
            } else {
                console.log("error");
                return;
            }
            console.log(commission.toFixed(2));
        break;

        default:
        console.log("error");
        break;
    }
}

tradeCommissions(["Sofia", 1500]);      //120.00
tradeCommissions(["Plovdiv", 499.99]);      //27.5
tradeCommissions(["Varna", 3874.50]);      //387.45
tradeCommissions(["Kaspichan", -50]);      //error
