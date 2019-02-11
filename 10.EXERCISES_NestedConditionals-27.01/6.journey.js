function journey (input) {
    //Knowns: -The budget determines the destination: Up to 100lv -->Bulgaria, Up to 1000lv -->Balkans, More than 1000lv -->Europe.
    //Knowns: -The season determines how much percent of the budget it will spend: 
    //Knowns: -Summer-camp, Winter && Europe - hotel.
    //Wanted: -At the entrance: to accept the budget and season. At the exit: where the programmer will rest and how much he will spend?

    //Read
    let budget = Number(input.shift());     //[10.00-5000.00]
    let season = input.shift();     //"summer", "winter"
 
    //Manipulate
    let destination = '';
    let accommodation = '';
    let spending = 0;
 
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            accommodation = 'Camp';
            spending = budget * 0.30;
         } else {
            accommodation = 'Hotel';
            spending = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            accommodation = 'Camp';
            spending = budget * 0.40; 
        } else {
            accommodation = 'Hotel';
            spending = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        accommodation = 'Hotel';
        spending = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${spending.toFixed(2)}`);
}

journey(["50", "summer"]);      //Somewhere in Bulgaria Camp - 15.00
journey(["75", "winter"]);      //Somewhere in Bulgaria Hotel - 52.50
journey(["312", "summer"]);      //Somewhere in Balkans Camp - 124.80
journey(["678.53", "winter"]);      //Somewhere in Balkans Hotel - 542.82
journey(["1500", "summer"]);      //Somewhere in Europe Hotel- 1350.00
