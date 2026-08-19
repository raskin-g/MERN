//inheritence

//Parent class
class User {
    name;
    email;
    address;

    constructor(name, email, address){
        this.name=name;
        this.email=email;
        this.address=address;
    }

    printUser(){// you can make this as arrow function
        console.log(`My name is: ${this.name}`);
        console.log(`My Email is: ${this.email}`);
        console.log(`My address is: ${this.address}`)
    }
}

//inherit
//child class
class Student extends User{
    course;
    section;
    rollNo;

    //constructor overriding
    constructor(name, email, address, course, section, rollNo){
        //parent's constructor trigger aka super the immidiate parent
        // User=> constructor(name, email, address)
        //even if there is no constructor in parent you need to call super
        //super()
        super(name, email, address)

        this.course = course
        this.section= section;
        this.rollNo = rollNo
        this.school = "Broadway Infosys" // public and allowed to Student class

    }
    printUser(){
        // method overriding
        //this.printUser() //infinite loop 
        super.printUser()
        console.log(`I am currently studying: ${this.course}`);
        console.log(`I am currenty studying in section: ${this.section}`)
        console.log(`My roll No is : ${this.rollNo}`)
    }
}

//child class
class Admin extends User{ // you can also extend from the Student class
    static role="admin";   //js class constant
    //role="admin"    //variable
}
//  adminObj = new Admin()
// adminObje.role // if not declared static

//if static no need to create object
// Admin.role // static data behaviour // no need to make object


//Parent = User
//Children = Student, Admin

//Constructor => User
//obj of Student =>
    //if child class does not have any constructor but the parent does,
        //then when we create an object of child, it triggers parent's constructor

const usr =new User("Raskin","raskin@email.com","Kathmandu")
console.log(usr)

//stuendt class get highest priority
const std = new Student("Raskin","raskin@email.com","Kathmandu","MERN","lab-15",1)
console.log(std);
std.printUser()

const admin = new Admin()
console.log(admin)