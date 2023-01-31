// function expression
let myFunction = function(arg1, arg2) {
    statements(s)
}


let m1 = function(x,y) {
    return x*y;
}

// above function expression can be written using arrow function
let myFunction2 = (arg1, arg2) => statements(s)

let m2 = (x,y) => x*y;
let m3 = () => console.log('hello') // hello
let x = "Hello World";
let m4 = x => console.log(x); // Hello world


let age = 18;
let GoTo = (age < 18) ? () => console.log('Party') : () => console.log('Movie');
console.log(GoTo()); // Movie

