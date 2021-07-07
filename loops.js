// Loops Lesson!

// For loop
// While loop
// do...while
// for...in
// for...of
// Array Iterators
    // forEach

// if - then {} // conditional - not quite a loop though!

// DECLARE a variable using these keywords: let, const, var

let num = 5;
while(num >= 0) {
    console.log(num)
    num--
}

/*
    let num = 5; // Declare the loop variable
    while(num >= 0) { // BOOLEAN Expression
        console.log(num) // Code to repeat
        num-- // increment or decrement the loop variable
    }   
*/

// Boolean expressions:
// Comparative Operators:

// > greater than symbol
// >= greater than or equals symbol
// < less than symbol
// <= less than or equals to symbol

// Loose vs Strict equality
// == "loose" equality
// != "loose" not equal to

// === "strict" equality
// !== "strict" not equal to

console.log("is 0 loosely equal to '0'", 0 == '0')
console.log("is 0 strictly equal to '0'", 0 === '0')

// "Postfix" and "Prefix" increment/decrement operators
let myNum = 100
myNum = myNum + 1
// postfix increment
console.log(myNum)
console.log(myNum++)
console.log(myNum)

console.log(++myNum)
// myNum++
// ++myNum


let anotherNum = 5;
console.log('anotherNum is the value:', anotherNum)
// We know that anotherNum++ will increase the value
// of the variable AFTER we're done with it
console.log(anotherNum++)
// 1st: Console.log the current value of the variable
// 2nd: INCREMENT the variable after it's been logged
console.log(anotherNum)



// FOR LOOPS!
// for(Declare the loop variable ; Boolean Condition ; increment the loop variable) {
    
// }

// This loop is starting at 0!
// Where are we stopping? We're stopping at 15
// How far are we jumping each time? - Aka How big is our increment?
// i += 3 is the same as i = i + 3
for(let i = 0; i <= 15; i += 3) {

}


// Let's say we want to count from 2 to 6
for(let i = 2; i <= 6; i++) {
    console.log('i is the value:', i)
}

// i++
// ++i
// i--
// i*=

// Make a loop that DOUBLES every iteration
for(let i = 2; i <= 16; i*=2) {
    console.log(i)
}

// Scoping Rules
let aVariableThatIKnowDoesntExist = 0;
console.log(aVariableThatIKnowDoesntExist)


// Difference between var and let
const someVariable = 10
for(let i = 0; i < 10; i++) {
    // cool!
    console.log(someVariable)
    console.log('we only have access to i here inside the curly brackets', i)
}
console.log('we dont have access to i outside the scope - here!', i)

// ---------------------

for(var i = 0; i < 10; i++) {
    // not cool
    var myPrivateVariable = "the secret formula"
}
console.log("var allows the variables inside smaller scopes to escape", i)
console.log(myPrivateVariable)