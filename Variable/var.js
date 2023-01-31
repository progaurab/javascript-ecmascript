

// variable decleare using var

var name = "Instill Learning";

{
    // this variable can only be accessed only inside this block
    var name = "Chandan";
    console.log(name);    // Chandan
}

console.log(name); // Instill Learning