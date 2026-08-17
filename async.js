// Promise
    // api call, db query, time related functions (set timeout, set interval), complex code execution
// pure asynchrounus object
// something that does't execute in real time, it is in future
// it is etither fulfilled or reject
// 3 stages
    // pending(operation)
    // resolution (fullfilled/rejected)
    // settlement (resolved/reject)      // chale ni nachale ni code flow should go on

const prom = new Promise((resolve, reject)=>{
    //logic
    let result=true;
    resolve("I am resolve of the promise")
    // reject("I am reject of the promise")
})
//promise has to be handled
// .then().catch()
// then is optional
prom.then((resolveData)=>{
    console.log(resolveData)
}).catch((execption)=>{
    console.log(execption)
})

console.log("I am the last line")

// facebook, youtube,
// www.youtube.com/watch/?v=videoID
// video player dark box (lazy loading)
    // header
    //sidebar
    //bideo detail
    //video


// const obj = new Promise()
// if a function is returning an object of Promise class => the function is by default async
// const login = (uname,pwd)=> {
//     return new Promise((res, rej)=>{
//         // db query uname, pwd, validate with db Data
//         let token =""
//         if(!token){
//             rej({code: 422, message: "Credentials does not match"})
//         }else{
//             res({token: token, message: "Login Success"})
//         }
//     })
// }

//form
// <Button disabled={true} >
//<Button disabled={loading} >
    // fill with data
        // submit buttton click
        // throttling the user submits
        // let loading =true;
        // let formData={}
        // login("username","password")
        // .then((resolve) => {
        //     loading(false)
        //     //reset(formData)
        // })
        // .catch((exception) =>{
        //     //reset(formData)
        // })
        // .finally(()=>{
        //     loading = false
        // })


//any function declared as an async returns promise
//Promise<void> => Promise<undefined, undefined>
const login= async (uname,pwd)=>{
    // db query
    const token=""
    if(!token){
        //trow an execption
        // an async function's throw => Promise Reject
        throw{code:422, message:"Credentials does not match"}
    } else{
        //return resolved
        // an async function's return = Promise Resolved
        return {token: token, message:"YOu are logged In"}
    }
};
// IIFE
    // immediately invokable function expression
    // for singleton instance

(async ()=>{
    try{
        const result = await login("admin","password")
        console.log(result)
    }catch(exception){
        console.log(exception)
        console.log("Handling ",exception)
    }
})();

// await before calling async always returns the promise data to the variable
//only async function can have await keyword
// const handler=async() =>{
//     const resolveData = await login("admin","password")
//     console.log(resolveData)
//     console.log("I am here")
// }

// handler()




