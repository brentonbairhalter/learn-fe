/************************
 *
 * Javascript Example Snippets
 *
 *
************************/


/************************
 * HOISTING
 * - links:
 *     http://jamesallardice.com/explaining-function-and-variable-hoisting-in-javascript/
************************/

// 1.
var x = 10;
function y() {
    console.log(x); //prints undefined
    var x = 20;
    console.log(x); //prints 20
}
y();
console.log(x); //prints 10
/////////////////////////***explained***\\\\\\\\\\\\\\\\\\\\\\\\\
var x;  //declaration of x is hoisted (x is undefined)
x = 10; //assignment still occurs where we intended (x is 10)
function y() {
    var x; //declaration of a different variable named x is hoisted (x is undefined)
    console.log(x); //prints undefined
    x = 20; //assignment (x is 20)
    console.log(x); //prints 20
}
y();
console.log(x); //The variable named x in the outer scope still contains 10

// 2.
var user = { name: 'Tomas', age: 25 };
function getUser() {
    console.log(user); //prints undefined
    var user = user || {};
    console.log('user: ', user); //prints Object { }
    return user;
}
getUser(); //returns Object { }


/************************
 * PROTOTYPICAL INHERITANCE
 * - links:
 *     http://javascript.info/tutorial/inheritance
************************/

// 1.
var animal = {
    eats: true
};
var fedUpRabbit = {
    eats: false
};

fedUpRabbit.__proto__ = animal;

console.log(fedUpRabbit.eats); // false