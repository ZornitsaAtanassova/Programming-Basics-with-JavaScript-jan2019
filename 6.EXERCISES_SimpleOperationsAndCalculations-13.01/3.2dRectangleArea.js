function area(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let area = length * width;
    //let perimrter = 2 * (length + width);
    let perimrter = length * 2 + width * 2;

    console.log(area.toFixed(2));
    console.log(perimrter.toFixed(2));
}

area([600.25, 500.75, 100.50, -200.5]);