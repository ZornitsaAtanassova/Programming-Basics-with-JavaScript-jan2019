function areaOfFigure(input) {
    let figureType = input.shift();
    let area = 0.0;

    switch (figureType) {
        case "square": {
            let a = Number(input.shift());
            area = a * a;
            break;
        }
        case "rectangle": {
            let a = Number(input.shift());
            let b = Number(input.shift());
            area = a * b;
            break;
        }
        case "circle": {
            let r = Number(input.shift());
            area = Math.PI * r * r;
            break;
        }
        case "triangle": {
            let a = Number(input.shift());
            let h = Number(input.shift());
            area = a * h / 2;
            break;
        }
    }
    
    console.log(area.toFixed(3));

    /* // Alternative way
    if (figureType == "square") {
        let a = Number(input.shift());
        area = a * a;
        console.log(area.toFixed(3));
    }else if (figureType == "rectangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        area = a * b;
        console.log(area.toFixed(3));
    }else if (figureType == "circle") {
        let r = Number(input.shift());
        area = Math.PI * r * r;
        console.log(area.toFixed(3));
    }else if (figureType == "triangle") {
        let a = Number(input.shift());
        let h = Number(input.shift());
        area = a * h / 2;
        console.log(area.toFixed(3));
    }else {
        console.log("Unknown figure");
    } */
}

areaOfFigure(["square", "5"]);     //25.000
areaOfFigure(["rectangle", "7", "2.5"]);     //17.500
areaOfFigure(["circle", "6"]);     //113.097
areaOfFigure(["triangle", "4.5", "20"]);     //45.000
areaOfFigure(["triangleeeee", "4.5", "20"]);     //Unknown figure
