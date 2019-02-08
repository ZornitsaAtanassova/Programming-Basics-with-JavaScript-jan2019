function pointOfRectangleBorder(input) {
    //Read
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    //Manipulate
    let firstCondition = (x == x1 || x == x2) && (y >= y1 &&y <= y2);
    let secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2);

    if (firstCondition || secondCondition) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}

pointOfRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);   //Inside/Outside
pointOfRectangleBorder(["2", "-3", "12", "3", "12", "-1"]);   //Border
