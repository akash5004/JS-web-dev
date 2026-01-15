 let empl ={id:101,
    name: "Akash",
    age:20
 };
 let get_keys = Object.keys(empl) //returns an array with keys as strings
console.log(get_keys);
 let get_values= Object.values(empl)
 console.log(get_values); //return values as an array with data types of va;ues as strings
let entries= Object.entries(empl)
console.log(entries);

empl.name="AMIT" //name got updated
empl.adress="PUSSGRC"
delete empl.age//added new key:values pair in empl object
console.log(empl);
// //after using freeze method , you cannot update existing properties, cannot add new properties, cqnnot delete properties
//  Object.freeze(empl)
//  empl.id=104;  //won't update
// empl.salary=10000;  //won't add
//delete empl.name;
//  console.log(empl);

 console.log(".seal method allows updation but not allow addition of new key: value pair.Using seal after using freeze won't work.");
 Object.seal(empl)
 empl.id=304;
 delete  empl.adress; //won't work
 empl.salary=12000;
 console.log(empl);
let obj1={ class:"CSE", batch:2028}
 let obj2=Object.assign({}, empl, obj1) //{} can be empty or another key:value pair
 console.log(obj2);
 console.log(obj1[symbol1]);





