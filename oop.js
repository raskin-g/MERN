// there are two types of js programming
// functional programming
// OOP programming
    // class and Objects
    // Class is a blueprint of entity(Data)
    // 4 pillars of OOP
        // Abstraction
        // Encapsulation  -> Can use access modifiers
        // Inheritance
        // Polymorphism


class User{
    //variables, aka member data
    name;
    email;
    address;
    phone;
    role;
    // private properties of the class
    #password;  //not accessible from outside the class


    // auto call functions
    constructor(name, email, address, phone, role, password){
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.role = role;
        this.#password = password;
        console.log("I am always called")
    }


    // functions , aka methods
    setPassword(password){
        this.#password = password
    }

    getPassword(){
        return this.#password
    }
}



const userObj = new User("Raskin Ghimire","raskin@ghimire.com","Kathmandu",9841666666,"Full stack dev","Admin123#")
// userObj.name = "Raskin Ghimire"
// userObj.email = "raskin@ghmire.com"
// userObj.address = "Kathmandu"
// userObj.phone = 9841666666
// userObj.role = "Full-stack developer"
// userObj.setPassword("Admin123#")

console.log(userObj) // User {name: "Raskin", ...}
console.log(userObj.getPassword())




class Product{
    name;
    category;
    brand;
    price;
    discount;

    #discountAmount;
    #priceAfterDiscount;


    constructor(name, cat, brand, price, dis){
        // never arrow function
        // never async or cannot return promise
        // never retrun anything [default ma 'retrun this' hunncha]
        this.name = name
        this.category = cat
        this.brand = brand
        this.price = price
        this.discount = dis
        this.getDiscountAmount()
        this.getAfterDisountAmount()
    }

    //you can make promise based, async fucntions only not in constructor
    getDiscountAmount(){
        this.#discountAmount = this.price*this.discount/100
    }
    getAfterDisountAmount(){
        this.#priceAfterDiscount = this.price - this.#discountAmount
    }

    printProduct(){
        console.log("Product Name: ", this.name);
        console.log("Product Category: ", this.category);
        console.log("Product Brand: ", this.brand);
        console.log("Product Price: Npr.",this.price);
        console.log("Product Discount: ", this.discount+"%");
        console.log("Disccount AMoutn: Npr.", this.#discountAmount);
        console.log("After Discount: Npr.",this.#priceAfterDiscount)
    }

}

const prodObj = new Product("Product One","Phones","ABC",10000,10)

prodObj.printProduct()