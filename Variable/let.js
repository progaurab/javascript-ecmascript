// let is Block-scopped variable
// can't be re-declare and it can be re-assign 

// variable decleare using let

let name = "Instill Learning";

{
    // this variable can only be accessed only inside this block
    let name = "Chandan";
    console.log(name);    // Chandan
}

console.log(name); // Instill Learning