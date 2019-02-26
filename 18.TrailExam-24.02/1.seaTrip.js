function seaTrip(input) {
    let foodMoney = Number(input.shift());
    let souvenirMoney = Number(input.shift());
    let hotelMoney = Number(input.shift());

    let totalMoney = 0;
    let foodSum = foodMoney * 3;
    let souvenirSum = souvenirMoney * 3;
    let hotelSum = (hotelMoney * 3) - (hotelMoney * 0.10) - (hotelMoney * 0.15) - (hotelMoney * 0.20);
    let fuel = ((210 * 2) / 100)* 7;
    let fuelSum = fuel * 1.85;
    
    totalMoney = foodSum + souvenirSum + hotelSum + fuelSum;

    console.log(`Money needed: ${totalMoney.toFixed(2)}`);
}

seaTrip([100, 50, 500]);
seaTrip([200, 200, 1000]);
seaTrip([50, 50, 120]);
