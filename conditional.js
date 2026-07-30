// if-else
// else-if
// switch-case is good for matching with equals to value
// loop

let day = 1; //1-7
//if else
//nested if else
if (day === 1){
    console.log("Sunday")
}else{
    if(day === 2){
        console.log("Monday")
    }else{
        if(day ===3){
            console.log("Tuesday")
        }else{
            if(day===4){
                console.log("Wednesday")
            }else{
                if(day ===5){
                    console.log("Thursday")
                }else{
                    if(day===6){
                        console.log("Friday")
                    }else{
                        if(day===7){
                            console.log("Saturday")
                        }
                    }
                }
            }
        }
    }
}

if(day ===1){
    console.log("Sunday")
} else if(day ===2){
    console.lgo("Monday")
} else if(day===3){
    console.log("Tuesday")
}else if(day ===4){
    console.log("Wednesday")
}else if(day===5){
    console.log("Thursday")
}else if(day===6){
    console.lgo("Friday")
}else if("Saturday"){
    console.log("Saturday")
}

month=1 

if(month === 1){
    console.log("January")
}else if(month ===2){
    console.log("Feburary")
}else if(month ===3){
    console.log("March")
}else if(month ===4){
    console.log("April")
}else if(month ===5){
    console.log("May")
}else if(month ===6){
    console.log("June")
}else if(month ===7){
    console.log("July")
}else if(month ===8){
    console.log("August")
}else if(month ===9){
    console.log("September")
}else if(month ===10){
    console.log("October")
}else if(month ===11){
    console.log("November")
}else if(month ===12){
    console.log("December")
}

switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feburary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    default:
        console.log("Invalid month number")
        break;//optional

}

let nameOfDay="Sunday"

if (nameOfDay==="Sunday" || nameOfDay==="Saturday"){
    console.log("Holiday")
}else if(nameOfDay==="Friday"){
    console.log("Weekend")
}else if (nameOfDay==="Monday"||nameOfDay==="Tuesday"||nameOfDay==="Wednesday"||nameOfDay==="Thursday"){
    console.log("Weekday")
}else{
    console.log("Invalid day")
}



// Task:
// Write a prog to calucate electic bill
// the tarrif is follow
// upto 
let unitsConsumed = 321
let billAmount=0

if (unitsConsumed>0 && unitsConsumed<=20){
    billAmount=30
}else if (unitsConsumed<=70){
    billAmount = 30 + (unitsConsumed-20)*5
}else if (unitsConsumed<=120){
    billAmount=30+50*5+(unitsConsumed-70)*7
}else if (unitsConsumed<=220){
    billAmount=30+50*5+50*7+(unitsConsumed-120)*10
}else if (unitsConsumed<=320){
    billAmount=30+50*5+50*7+100*10+(unitsConsumed-220)*15
}else {
    billAmount=30+50*5+50*7+100*10+100*15+(unitsConsumed-320)*20
}
console.log(billAmount)




//loop
 //iteration-repetation
 // Loops{we use to itirate over data thses arent used much}
    //do-while
    // while
    // for
  //for Array Data structure
    // for-in
    // for -of
 //Data(diff from for-in and for-of)
let i=1
do {
    console.log(i);
    i++;
}while(i<=10)

let j=1
while(j<=10){
    console.log(j)
    j++
}

//for loop
for (let k=1; k<=10;k++){
    console.log(k)
}

//data struct
let userList =[
    {name:"User One",email:"one@user.com",address:"Kathmandu"},
    {name:"User Two",email:"two@user.com",address:"Kathmandu"},
    {name:"User Three",email:"three@user.com",address:"Kathmandu"},
    {name:"User Four",email:"four@user.com",address:"Kathmandu"}
];
for(let i=0;i<userList.length;i++){
    console.log(`Name: ${userList[i].name}`);
    console.log(`Email: ${userList[i].email}`);
    console.log(`Address: ${userList[i].address}`);
    console.log("------------1")
}

//for in loopp 
for(let i in userList){//the i starts fom 0 up to n(last index of the array)
    let user=userList[i]
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Address: ${user.address}`);
    console.log("------------2")

}

//for of loop

for (let user of userList){// returns the value of user on every iteration
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Address: ${user.address}`);
    console.log("------------3")

}

//data tree is a type of structure which repeats its self in multiple level
const treeData = [
    {key:"value", data: [
        {key:"value1",data: null}
    ]}
]
for(let branch1 of treeData){
    console.log(branch1.key)
    if(branch1.data){
        for(let branch2 of branch1.data){
            console.log("\t"+branch2.key)
        }
    }
}

let employees=[
    {name:"Employee 1", email:"one@emply.com",experience: [
        {company:"Company 1", position:"Trainer",startDate:"2000-01-01",endDate:null},
        {company:"Company 2", position:"Developer",startDate:"1995-01-01",endDate:"1999-12-31"}
    ]}
]

for(let employee of employees){
    console.log(`Name: ${employee.name}\nEmail: ${employee.email}\nExperience:`)
    if(employee.experience){
        for(let exp of employee.experience){

        console.log(`\tCompany Name: ${exp.company}\n\tPostion: ${exp.position}\n\tStart Date: ${exp.startDate}\n\tEnd Date: ${exp.endDate ? exp.endDate : 'N/A'}\n\t--------------------------------------`)
    }
}
}