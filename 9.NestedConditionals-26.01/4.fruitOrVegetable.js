function fruitOrVegetable(input) {
    let product = input.shift();

    if (product === 'banana' || product === 'apple' || product === 'kiwi' || product === 'cherry' || product === 'lemon' || product === 'grapes') {
            console.log("fruit");
    } else if (product === 'tomato' || product === 'cucumber' || product === 'carrot' || product === 'pepper') {
            console.log("vegetable");
    } else {
            console.log("unknown");
    }
}

fruitOrVegetable(["banana"]);   //fruit
fruitOrVegetable(["apple"]);   //fruit
fruitOrVegetable(["tomato"]);   //vegetable
fruitOrVegetable(["water"]);   //unknown
