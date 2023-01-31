// const is Block-scopped variable
// Once declare, you can not change the value of a const variable
// can't be re-declare and can't be re-assign 

// variable decleare using const
const name = "Instill Learning";

{
    // this variable can only be accessed only inside this block
    const name = "Chandan";
    console.log(name);    // Chandan
}

console.log(name); // Instill Learning