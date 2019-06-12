function greetings(input) {
    let name = input.shift();
    let greeting = "Hello, " + name;
    console.log(greeting + "!");

    //console.log("Hello, " + name + "!")
    //console.log(`Hello, ${name}!`);
}
greetings(['Z']);