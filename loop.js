const userData = [
    {
        name:"User One",
        email:"one@user.com",
        address:"Kathmandu",
        phone:9841666666
    },
    {
        name:"User Two",
        email:"two@user.com",
        address:"Lalitpur",
        phone:9841666689
    },
    {
        name:"User Three",
        email:"three@user.com",
        address:"Kathmandu",
        phone:9841666709
    }

]
// table, grid, card view (jsx)
// js loop is only used array loop fucntions
  //js loop
  //.forEach, .map, .filter, .reduce, [.some, .every, each]

// foreach -> one disadvantage it doesnot retrun anything even if you put return.
  //array.forEach() 
const result = userData.forEach((val)=>{
    console.log(`Name: ${val.name}`);
    console.log(`Email: ${val.email}`);
    console.log(`Address: ${val.address}`)
    console.log(`Phone: ${val.phone}`)
    return "I am from ForEach"
})//index is optional
console.log(result)//undefined   coz no return from forEach

console.log("*******************************")

// map   -> very commonly used to loop through array as it has retrun available. 
// //same as forEach but with return
// const result = array.map((value, [index])=>{ // return statement})
// it will retrun even if you dont write retrun statement
// jati ota element huncha array ma teti choti return huncha
// array is pused as the retrun value
const response=userData.map((val,index)=>{
    console.log(`Name: ${val.name}`);
    console.log(`Email: ${val.email}`);
    console.log(`Address: ${val.address}`)
    console.log(`Phone: ${val.phone}`)
    return `Loop on index: ${index}`
    // return "I am from .map()" //if return not written it will send default return value as undefined any function is like that
})//index is optional
console.log(response) //I am from .map()


console.log("-----------------------filter------------------------------")

//filterLalitpur
    //const result = array.filter((val,index)=>{return boolean})
        // retrun value ma array push garcha
        // return will be popultated as an array of val only if the return has boolean true
        //result will be populated as and array of val only if the return has boolean true
        // means jun jun value itirate huda true return huncha tyo value array ma bascha

const numbs =[1,2,3,4,5,6,7,8,9,10]

const resultVal = numbs.filter((val, ind)=>{
    //retrun true or false
    if(val%2 === 0){
        return true  // retrun val => resultVal.push(val)
    }else{ //skip the loop if return false
        return false
    }
})
console.log(resultVal) //[2,4,6,8,10]

//reducing the function
// const resultVal = numbs.filter((val)=>{
//     return val %2 === 0})

const resultVal2 = numbs.filter((val) => val% 2 === 0) //most optimal way to write
console.log(resultVal2)

//you can chain in these functions
const resultVal3 = numbs.filter((val) => val% 2 === 0).map((num)=>num*2)
// numbs filter return array of even, then the array is pused to the map function, in which each value is pushed
//into array with multipled by 2
console.log(resultVal3)

const resultUser = userData.filter((user)=>user.address==="Kathmandu").map((user)=>{
    console.log(user)
})


let allowedList = ['a',1,'b','c','d',2,'e','f']
let key ='a'

const exists = allowedList.filter((val)=>typeof val ==="string").map((val)=>{
    console.log(val)
    return val
}).includes(key) //includes checks if the value is in the array or not

console.log(exists)

//filter() => ['a','b','c','d','e','f']
//['a','b','c','d','e','f'].map() => a b c d e f  //prints in each line ... retruns => ['a','b','c','d','e','f']
// ['a','b','c','d','e','f'].includes('a') => true

let obj={
    filename: "abcd.JPG"
}

let ext = obj.filename.split(".").pop().toLowerCase()
console.log(ext)


console.log("++++++++++++++++++++=reduce=+++++++++++++++++")

//
const numbs2 = [10,20,30,40,50,60,70,80,90,100]
const num1 = [23,45,76,54,21,87,86,95,23,999]

//
//reduce is same as map but it can access the previous index of the
//if i am i 1 index then i can get index 0 value
//jun retrun hanyo tei pre huncha next itireation ko lagi
//const response=numbs.reduce(cbfunc, initial value)
const responseResult = numbs2.reduce((pre,val,ind)=>{
    console.log({pre,val,ind})
    return pre+val
},0)
console.log(responseResult)

const maxNum = num1.reduce((pre,val)=>{
    // if(pre>val){
    //     return pre
    // }
    // return val
    return(pre>val)?pre:val
})
console.log(maxNum)