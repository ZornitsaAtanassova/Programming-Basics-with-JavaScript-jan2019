function animalType(input){
    let animal = input.shift();

    switch (animal) {
        case "dog": {
            console.log("mammal");
            break;
        }
        case "crocodile": {
            console.log("reptile");
            break;
        }
        case "tortoise": {
            console.log("reptile");
            break;
        }
        case "snake": {
            console.log("reptile");
            break;
        }
        default: {
            console.log("unknown");
            break;
        }
    }
}

animalType(["dog"]);   //mammal
animalType(["snake"]);   //reptile
animalType(["cat"]);   //unknown
