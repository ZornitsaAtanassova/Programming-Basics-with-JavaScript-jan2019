function pointInRectangle(input) {
    //Read
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    //Manipulate
    if ((x1 <= x && x <= x2) && (y1 <= y && y <= y2)) {
        console.log("Inside");
    } else {
        console.log("Outside");
    }
}

//x1 y1 x2 y2 x y
pointInRectangle(["2", "-3", "12", "3", "8", "-1"]);     //Inside
pointInRectangle(["-1", "-3", "4", "1", "0.5", "1"]);     //Inside
pointInRectangle(["2", "-3", "12", "3", "11", "-3.5"]);     //Outside
pointInRectangle(["-1", "-3", "4", "1", "-1.2", "1.4"]);     //Outside
