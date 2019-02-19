function salary(input) {
    //Read first and second inputs
    let nOpenTabs = Number(input.shift()); //[1-10]
    let  currSalary = Number(input.shift()); //[700-1500]

    for (let i = 0; i < nOpenTabs; i++) {
        //Read remining inputs
        let webSite = input[i];
        //console.log(webSite + i);

        switch (webSite) {
            case "Facebook":
            currSalary -= 150;
            //console.log(webSite);
            break;
            case "Instagram":
            currSalary -= 100;
            //console.log(webSite);
            break;
            case "Reddit":
            currSalary -= 50;
            //console.log(webSite);
            break;
            default:
            //console.log("Another");
            break;
        }
    }
    if (currSalary === 0 || currSalary < 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(currSalary);
    }    
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);     //You have lost your salary.
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);     //500
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);     //350
