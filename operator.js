//only !== and === checks the value and data type (uses ascii)

let i = 10
let j = '10'

console.log(i==j) // i == j=> (10 =='10') => true values only
console.log(i===j) // false 

// logical operators
// and (&&), or (||), not(!)
// !x if x is not set or undefined or empty
let x=10
if (!x) {
//if x is not set or undefined or empty
}

// string concatination operator
	// +
let name = "raskin"
let emailTemplate = "Dear " + name
let concatkosum=x+name //10raskin

//conditional or ternary operator
	//(expression) ? true : false
let age =18
console.log((age >= 18) ? "You can vote!!":"You cannot vote");
//let canVote = age>= 18 ?? false
//nullish colleashing
let canVote = age >= 18 ?? false
let user = {
	experience: null
}
// null => falsy value
// let overallExp = user.experience ? user.experience : "N/A"
let overallExp = user.experience ?? "N/A";

//JS ONLY OPERATORS
// Template literal
// `${pass Js inside stirng}`
let n = 10
let message = `Dear ${name},
You have ${n} no. of notification.
`
// <span class=`${condition ? 'green' :'red'}></span>
console.log(message)

// Destruction
let numbs = [1,2,3,4]

// let num1 = numbs[0]
// let num2 = numbs[1]
// let num3 = numbs[2]

//Array Destructure
let[num1, num2, num3] = numbs;

let product = {
	prodName: "iphone 12",
	price:12000,
	discount:10,
	brand:"Apple",
	category:"smart phone"
}
// let proName = product.prodName
//let price = product.price
// let category = product.category

let {prodName, price: prodPrice, category } = product

//spread and rest (...)
//copying arrays
let fruits = ["apple","banana"];
let fruitsClone=[...fruits]; //['apple', 'banana'] but new object with new memory.
//but if there is array inside array then it will refrence the same obj vitra patti ko

//merging arrays
let numbersList=[1,2];
let combinedNumber=[...numbersList,3,4] //[1,2,3,4]

//cloning and modifying objects
let people = {name: 'Alice', role:'Guest'};
let updatedPeople = {...people, role: 'Admin', age:25}
//result {name:'Alice',role:'Admin',age:25}

//passing arguments in fuction
let scores = [45,66,78,12];
let highest = Math.max(...scores); //Evaluates as Math.max(45,82,99,12)
console.log(highest)

//get infinite number of arguments in a function
function sumAll(...numbers){
	return numbers.reduce((sum,num) => sum +num, 0);
}
sumAll(5,10,15);//'numbers' is internal array:[5,10,15] which gives 30

//positional and rest arguments
function processRank(first, second, ...theRest){
	console.log(`Winner: ${first}`);
	console.log(`1st runner: ${second}`);
	console.log(`remainig: ${theRest}`); //theRest will hold remainig runnerups
}
processRank('ANA','BEN','CHARLIE','DAVID','EMA');

//Destructing Assignment
let [first, ...remaining] = [10,20,30,40];
// first= 10, remaining=[20,30,40]

let {brand, ...specs} = {brand:'Dell', ram:'16GB',storage:'512GB'}
//brand='Dell', specs ={ram:'16GB',storage:'512GB'}


//typecasting
let str='10'
//to make number
let abcd=+str

//sir le padako wala
let user1={
	uname:"user 1",
	email: "1@user.com",
	address: "kathmandu"
}

let user2 = {...user1}

console.log(user1)
user2.uname = "User 2"
console.log(user1)

let numberlist1 =[1,2,3]
let numberlist2=[4,5]
let finalnumberlist=[...numberlist1,...numberlist2]

const {uname, ...bakiko} =user1


//Bit wise operator
	// &,|
