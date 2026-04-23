class Product{

    //properties->variables->memebr functions

    //creating the constructor method

    #rating; //private field

constructor(name,price,rating){
        // console.log(" calling the constructor");
this.name=name;
this.price=price;
this. #rating = rating;

// return 10; //this will be ignored
//if you are retruning primitive value from constructor then it will be ignored and object will be returned by default

//  return {brand:"samsung", model:"Galaxy Buds Pro"}; //if you are returning non primitive value from constructor then it will return that value instead of object

}

    //behaviour-member functions
    display(){
        console.log("this keywors refers to: ", this);  //this keyword refers to the current object

        console.log(`${this.name}  costs  Rs.${this.price} and its rating is ${this.#rating} . `);
    }
}

 const earbuds= new Product("realme buds T310", 1899, 4.2); //new-> creates an empty plain object; syntax: type object_name= new Class_name();
//this above code automatically calls constructor method
console.log(earbuds);
console.log(earbuds.name);
console.log(earbuds.rating); //undefined because rating is private data field


console.log("-------------------------------------------------------------------------------------------------");

earbuds.display();

earbuds.name="redmi"; //updates the value
console.log(earbuds);


//function constructor: used before the introduction of class in JavaScript
function Mobile(name,price,rating){
    this.name=name;
    this.price=price;
    this.rating=rating;
}
const mobile1= new Mobile("samsung galaxy M14", 12999, 4.3);
console.log(mobile1);
//array function nahi kaam karega iss case me



