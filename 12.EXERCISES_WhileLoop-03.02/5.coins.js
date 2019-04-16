function coins(input) {
    //It's necessary to convert money in coins. 1BGN = 100coins
    let money = Number(input.shift());

    let lv = Math.floor(money);
    //console.log(lv)
    let st = Math.floor((money * 100) - (lv * 100));
    //console.log(st)

    let count = 0;

    while (lv > 0) {
        if (lv >= 2) {
            lv -= 2;
            count++;
        } else if (lv >= 1) {
            lv--;
            count++;
        }
    }

    while (st > 0) {
        if(st >= 50) {
            st -= 50;
            count++;
        } else if(st >= 20) {
            st -= 20;
            count++;
        } else if(st >= 10) {
            st -= 10;
            count++;
        } else if(st >= 5) {
            st -= 5;
            count++;
        } else if(st >= 2) {
            st -= 2;
            count++;
        } else if(st >= 1) {
            st -= 1;
            count++;
        }
    }
    
    console.log(count);

    
    /* let moneyInCoin = Number.parseInt(money * 100);
    //console.log(moneyInCoin)
    let moneyArray = Array.from(moneyInCoin.toString());
    console.log(moneyArray)
    let lengthArray = moneyArray.length;
    console.log(lengthArray)    

    /* let moneyString = moneyInCoin.toString();
    //console.log(moneyString)
    let lengthMoneyString = moneyString.length;
    console.log(lengthMoneyString); */

    /* while (lengthMoneyString > 0) {
        console.log("1")

    } */

}

coins(["1.23"]);  //4
coins(["2"]);  //1
coins(["0.56"]);  //3
coins(["2.73"]);  //5
