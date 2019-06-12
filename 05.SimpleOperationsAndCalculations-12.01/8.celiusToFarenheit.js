function convertor(input) {
    let c = Number(input.shift());
    let f = (c * 9) / 5 + 32;
    console.log(f.toFixed(2));
}

convertor([32.3]);