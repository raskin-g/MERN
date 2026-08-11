// there are 5 development principles among them SOLID is the first one for functions
// SOLID principle
// FUnctional programming
// functions are those logical codeblocks that have some specific tasks or work to do
// Types: Builtin/prebuild and UserDefined/custom

// every variables tht are declared in a function are local/block
//

// General funcitons 
// JS hoisting which is that we can call the funciton before declartion as JS is compiled
function addNumbers(a,b){
    let c = a+b
    return c
}

let result = addNumbers(10,20) //function call
console.log(result)

// Arrow functions MOST USED
//ES6 MODERN JS
const addNumbers1 = (a,b) => {
    // body define
    let c= a+b
    return c;
}
const res = addNumbers1(10,20)
console.log(res)

//one liner arrow function
const addNumbers2 = (a,b) => (a+b); //retrun wala ma bracket narakhe ni huncha

console.log(addNumbers2(10,10))
// <button onCLick={()=>}

    //types of runction
//structure
/**
 * clouser
 * recursive
 * callback
 * async (VVVI)
 */

// OOP based Programming

