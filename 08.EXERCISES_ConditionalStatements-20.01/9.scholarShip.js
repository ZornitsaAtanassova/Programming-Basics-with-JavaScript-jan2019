function scholarship(input){
    let income = Number(input[0]);
    let avrScore = Number(input[1]);
    let minWage = Number(input[2]);
   
    let social = 0;
    let excellent = 0;
       
    if (income < minWage && avrScore > 4.5 ){
        social = Math.floor(minWage * 0.35);
    }
    if (avrScore >= 5.5){
        excellent = Math.floor(avrScore * 25);
    }  
    if (social == 0 && excellent == 0) {
        console.log("You cannot get a scholarship!");
    } else if (social > excellent){
        console.log(`You get a Social scholarship ${social} BGN`);
    } else {
        console.log (`You get a scholarship for excellent results ${excellent} BGN`);
    }    
}

scholarship(["480.00", "4.6", "450.00"]);    //You cannot get a scholarship!
scholarship(["300.00", "5.65", "420.00"]);    //You get a Social scholarship 147 BGN 
//scholarship([318.40, 4.6, 320.00]);
