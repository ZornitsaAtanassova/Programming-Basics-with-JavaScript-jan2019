function spaceShip(input) {
    //Read input
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let avrHeightAstronauts = Number(input.shift());

    let areaShip = width * length * height;
    //console.log(areaShip)
    let areaRomm = (avrHeightAstronauts + 0.40) * 2 * 2;
    //console.log(areaRomm)
    let astroCount = Math.floor(areaShip / areaRomm);
    //console.log(astroCount)

    if (astroCount >= 3 && astroCount <= 10) {
        console.log(`The spacecraft holds ${astroCount} astronauts.`);
    } else if (astroCount < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (astroCount > 10) {
        console.log(`The spacecraft is too big.`);
    }
}

spaceShip([3.5, 4, 5, 1.70]);
spaceShip([4.5, 4.8, 5, 1.75]);
spaceShip([3, 3, 4, 1.68]);
