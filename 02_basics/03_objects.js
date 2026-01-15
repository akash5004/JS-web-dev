//objects creation- object literal method

const mySymbol= Symbol("key1")

let obj={ id:301,

     firstname:"AKASH",

     "last name":"KUMAR",

     salary:110000,

     [mySymbol]: "myvalue"
    }
console.log(obj);

console.log(obj.id);
console.log(obj.firstname);
console.log(obj['last name']);
console.log(obj.salary);
console.log(obj[mySymbol]);
console.log(typeof obj,mySymbol);  //object Symbol(key1)




//object creation- using new Object() costructor
let person= new Object()
person.firstName="Vikas"
person.lastName="Singh"
person.age=20
person.salary=13000

console.log(person);
console.log("salary is",person.salary);

let nested_obj={email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname2: "hitesh",
            lastname2: "choudhary"
        }
    }}
    console.log(nested_obj.fullname.userfullname.firstname2);

//updating/overwriting existing salary key's value
person.salary=20000
console.log(person); //salary updated to 20000
console.log("object after delete :");
delete person.lastName

//object creation- constructor function
function person2(naam, ling){
    this.name=naam;
    this.gender=ling;
}
let p2= new person2("Virat", "Male" , 25673)
console.log(p2);
console.log(p2.gender);
p2.score=24632  //dynamically adding a new key value pair score:24632
console.log(p2.score);

/*An object is a collection of key-value pairs.
Keys (also called properties) are usually strings (or Symbols).
Values can be any data type: numbers, strings, booleans, arrays, functions, or even other objects. */
//kabhi aur baat karenge object.create ke baare me
