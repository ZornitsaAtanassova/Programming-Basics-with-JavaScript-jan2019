function numberOneToNineToText(input) {
    let num = Number(input.shift());

    if(num == 1){
        console.log("one");
    }else if(num == 2){
        console.log("two");
    }else if(num == 3){
        console.log("three");
    }else if(num == 4){
        console.log("four");
    }else if(num == 5){
        console.log("five");
    }else if(num == 6){
        console.log("six");
    }else if(num == 7){
        console.log("seven");
    }else if(num == 8){
        console.log("eight");
    }else if(num == 9){
        console.log("nine");
    }else if(num < 1){
        console.log("number too small");
    }else{
        console.log("number too big");
    }
}

numberOneToNineToText(["5"]);   //five
numberOneToNineToText(["1"]);   //one
numberOneToNineToText(["9"]);   //nine
numberOneToNineToText(["10"]);   //number too big
numberOneToNineToText(["-1"]);  //number too small
