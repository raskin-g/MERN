//js print 1 - n  number without using loop but only function
//recursive function
const printN=(n,a =1) =>{
    //without loop print 1 to n
    console.log(a)
    a+=1
    if(a<=n){
        printN(n,a);
    }
    
}
printN(10)

//Tree data
const menuCourses =[
    {id: 1, name: "AI",courses: [
        {id: 4, name: "Vibe Coding with Claude AI",courses: 
            [
            {id: 7, name: "WHat is Vibing",courses: null }
            ]
        },
        {id: 5, name: "AI for Business Leaders",courses: null}
    ]},
{id: 2, name: "Python",courses: [
    {id: 6, name: "Python and Django",courses: null}
]},
{id: 3, name: "Web Design / Front End Devlopment",courses: null},
]


for(let course of menuCourses){
    console.log(course.name)
    if(course.courses){
        for(let subCourse1 of course.courses){
            console.log("\t"+subCourse1.name)

            if(subCourse1.courses){
                for(let subCourse2 of subCourse1.courses){
                    console.log("\t\t"+subCourse2.name)

                    if(subCourse2.courses){
                        for(let subCOurse3 of subCourse2.courses){
                            console.log("\t\t\t"+subCOurse3.name)
                        }
                    }
                }
            }
        }
    }
}

console.log("-----------------------")
function printMenu(courseData,space=0){
    const tabSpace="\t".repeat(space)
    for(let course of courseData){
        
        console.log(tabSpace+course.name)
        space++
        if(course.courses){
            printMenu(course.courses,space)

        }
    }
}
printMenu(menuCourses)

//clouser
//