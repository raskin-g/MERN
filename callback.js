//a function passed as an argument of another function is a callback
const fun1 =(val,cb)=>{
    console.log("I am in fun1")

    cb() //triggers fun2()

    return val
}

const fun2 =()=>{
    console.log("I am in fun2")
}

//fun1("abcd",fun2());
// val => abcd, cb =>undefined

fun1("abcd",fun2);
//val => abcd, cv =>  [Function: fun2]


const validate = (username, password, cb) =>{
    console.log("I am from Validate", username, password)
    cb(username, password)
}

const dbQuery=(username, password)=>{
    console.log("I am from dbQUery",username, password)
}

const login = (username, password) => {
    validate(username, password, dbQuery)
}

login("admin","admin123")


//inline function f\as call back

validate("username", "password", ()=>{
    console.log("I am in func")
})


const name = () =>{
    return "Raskin"
}
const getName = () =>{
    return `My name is ${name()}`
}

console.log(getName(name()))


console.log("------------------------------------------")

//
// setTimeout(cb, time In MilliSeconds)
setTimeout(() => {
    console.log("I will only execute after 3 second")
}, 3000)
console.log("I am last line")
//setInterval(cv, time In MilliSeconds)
setInterval(()=>{
    console.log("I execute every second...")
},1000)