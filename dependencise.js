const func1=()=>{
    // logic async
    let result= 1


    //clouser function : type of function we write inside a async function 
    //it is used to maintain flow of program so that func2 is ensured executed only after func1
    const func2=()=>{
        // always preserves the parent variables
        if(result){
            console.log("res is truthy")
        }else{
            console.log("res is falsy value")
        }
    }
    //func2(result)
    return func2;
}
const result = func1()
result()
// const func2=(res)=>{
//     if(res){
//         console.log("res is truthy")
//     }else{
//         console.log("res is falsy value")
//     }
// }

//let result=func1()
//func2(result)

//res is truthy

//console.log(func1())