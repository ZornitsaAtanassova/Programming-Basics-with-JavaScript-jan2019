function rectangleArea(input) {
    let a = input.shift();
    let b = input.shift();
    //console.log(a, b);
    
    let area = a * b;
    console.log(area);
    
    // input is argument, който ще съдържа в себе си всички входни данни подред, като на опашка.
    // let is keyword provide Block Scope variables. Тя е нова в новата версия ECMAScript6, с която се "създава" нова променлива.
    // Different between let, var and const?
    // What is Block, Function, Global, Local Scope? 
    // What is ECMAScript?
    // shift is method, който взема(дърпа) първия от входните данни. Всеки следващ метод, присвоява останалите подред.
    
}

rectangleArea([2,7,3,4]);   //Function call