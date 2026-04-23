const tinderUser = new Object() //Singleton object
console.log(tinderUser); //{}

// const tinderUser = { comma separated key:value pair };  aise bhi initialise kar sakte hai

//assign key value pair
tinderUser.id = "123abc";
tinderUser.name = "Jon Snow";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log("-------------");
console.log(tinderUser.name); //access keys-values using . operator
console.log(tinderUser['id']); //other way to access object keys-values

delete tinderUser.name; //delete any key value pair
console.log(tinderUser);
console.log("-------------");

const regularUser = {
    email: "akash@gmail.com",
    fullname: {
        userfullname: {
            firstname: "AKASH",
            lastname: "KUMAR"
        }
    }
 }

console.log(regularUser);
console.log("-----------");
console.log(regularUser.fullname.userfullname.lastname); //KUMAR
console.log("------------");
//we can also assign new key:value pair using dot operator

//Object.freeze(regularUser); //freeze: cannot add new properties, delete or modify existing properties.Objects become completely immutable
//regularUser.branch="CSE";
// console.log(regularUser.branch); //undefined

Object.seal(regularUser);  //can only modify existing properties
regularUser.email="jaspritbumrah@gmail.com"
console.log(regularUser['email']);




//creating object using function constructor- yaha function me koi return value nahi hoga
 function employeeObj(i, n, s){
    this.id=i;
    this.name=n;
    this.salary=s;
 }

 const emp= new employeeObj(301, "AKASH KUMAR", 2000000);
 console.log(emp);
 console.log("-------------");


//merge objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   ////{ obj1:{} , obj2:{}}
 const obj3 = Object.assign({}, obj1, obj2, obj4)

//const obj3 = {...obj1, ...obj2} //spread operator
console.log(obj3);


const users = [            //users is an arr of objects
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    }
]

console.log(users[1].email)
console.log(users);

//methods to access keys, values and key value pairs.

 console.log(Object.keys(tinderUser));  //gives arr of keys of objects
console.log(Object.values(tinderUser)); //gives arr of values of objects
console.log(Object.entries(tinderUser)); //gives each entry as arrays
console.log("----------");


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//extracting keys of ibjects

let keys= Object.keys(emp);

console.log(keys);

console.log(Object.values(emp));

console.log(Object.entries(emp));



