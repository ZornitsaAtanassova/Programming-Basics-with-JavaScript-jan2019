function footballResults(input) {
    //Read inputs
    let firstGameResult = input.shift();
    let secondGameResult = input.shift();
    let thirdGameResult = input.shift();

    //Global vars
    let wons = 0;
    let loses = 0;
    let drawns = 0;

    let host = 0;
    let guest = 0;

    //First game analisis
    host = Number(firstGameResult.charAt(0));
    //console.log(host)
    guest = Number(firstGameResult.charAt(2));
    //console.log(guest)
    if (host > guest) {
        wons++;
    } else if (host < guest) {
        loses++;
    } else if (host === guest) {
        drawns++;
    }

    //Second game analisis
    host = Number(secondGameResult.charAt(0));
    //console.log(host)
    guest = Number(secondGameResult.charAt(2));
    //console.log(guest)
    if (host > guest) {
        wons++;
    } else if (host < guest) {
        loses++;
    } else if (host === guest) {
        drawns++;
    }

    //Third game analisis
    host = Number(thirdGameResult.charAt(0));
    //console.log(host)
    guest = Number(thirdGameResult.charAt(2));
    //console.log(guest)
    if (host > guest) {
        wons++;
    } else if (host < guest) {
        loses++;
    } else if (host === guest) {
        drawns++;
    }

    //Print
    console.log(`Team won ${wons} games.`);
    console.log(`Team lost ${loses} games.`);
    console.log(`Drawn games: ${drawns}`);
}

footballResults(["3:1", "0:2", "0:0"]);     //Team won 1 games.   Team lost 1 games.   Drawn games: 1
footballResults(["4:2", "0:3", "1:0"]);     //Team won 2 games.   Team lost 1 games.   Drawn games: 0
footballResults(["0:2", "0:1", "3:3"]);     //Team won 0 games.   Team lost 2 games.   Drawn games: 1
