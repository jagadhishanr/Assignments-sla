// var
var name = "Bob";
var name = "jagan";
console.log(name);
//  Works — var can be reassigned (note)


// let
{
    let a = 100
    let b = 200
    console.log(a + b);
    // Works — let can be reassigned works on local scope (note)

}

console.log(b);
//    it doest works becoz let is local scope not global scope (note)


// const
const a = 100
const a = 200
console.log(a);
//  error becoz const is cannot be reassigned (note)

const weekdays = 7
console.log(weekdays);
// Works — let can be assigned only one time  (note)




