function danceHall(input) {
    let hallLength = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeSide = Number(input.shift());

    let hallArea =(hallLength * 100) * (hallWidth * 100);
    let wardrobeArea = (wardrobeSide *100) * (wardrobeSide * 100);
    let benchArea = hallArea / 10;

    let freeSpace = hallArea - wardrobeArea - benchArea;
    let dancersCount = Math.floor(freeSpace / (40 + 7000));
        
    console.log(dancersCount);
}

danceHall([50, 25, 2]);