/*
// this with traditional function
function Student() {  // 
    this.name = "Chandan"
    this.subject = "Blockchain"
    this.study = function() {
        console.log(this.subject);

        function innerFunc() {
            console.log(this.name);
            console.log(this);
        }

        innerFunc();
    }
}

let sName = new Student();
sName.study();
*/

// this with arrow function
function Student() {  // 
    this.name = "Chandan"
    this.subject = "Blockchain"
    this.study = function() {
        console.log(this.subject);

        let innerFunc = () => {
            console.log(this.name);
            console.log(this);
        }

        innerFunc();
    }
}

let sName = new Student();
sName.study();