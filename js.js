// How do you define a variable in JS?
// const
// let 
// var 

// So, these are all the ways to declare variables in JS—but what is the difference between them?
// var
// Defining a variable using `var` carries a high risk of error. This is because `var` does not throw an error if you redefine a variable with the same name later on—allowing you to re-declare or reassign it—which can lead to project issues.

var name = "ali";
var name = "reza";
console.log(name); // reza