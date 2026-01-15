// 👉 JavaScript is a **dynamic language with dynamic types**.
//    - Variables in JS are not directly associated with any specific data type.
//    - A variable can hold values of any type and can be reassigned later to another type.
//    - Example: a variable can be a number first, then a string, then a boolean.

// Example: Dynamic typing
let dynamicVar = 10;          // Number
console.log("dynamicVar:", dynamicVar, "Type:", typeof dynamicVar);

dynamicVar = "Hello JS";      // String
console.log("dynamicVar:", dynamicVar, "Type:", typeof dynamicVar);

dynamicVar = true;            // Boolean
console.log("dynamicVar:", dynamicVar, "Type:", typeof dynamicVar);

// 👉 JavaScript data types are divided into two categories:
//    1. Primitive (Value types)
//    2. Non-Primitive (Reference types)
// ---------------------------------------------------------------
// 🔹 PRIMITIVE DATA TYPES (immutable, stored by value)
// Primitives are basic types. They are stored directly in stack memory.
// When assigned, they create a **copy** of the value, not a reference.

// 1. Number
let num = 42; // JS has only one Number type (64-bit floating point)
let floatNum = 3.14;
console.log("Number:", num, floatNum);

// 2. BigInt (for very large integers beyond 2^53-1)
let bigIntVal = 12345601234567890n;
console.log("BigInt:", bigIntVal);

// 3. String (sequence of characters, immutable)
let str1 = "JavaScript";
let str2 = 'Dynamic Typing';
let str3 = `Template Literals: ${str1} is fun!`;
console.log(str1, str2, str3);

// 4. Boolean (true / false)
let isLearning = true;
let isBoring = false;
console.log("Boolean:", isLearning, isBoring);

// 5. Undefined (variable declared but not assigned)
let notAssigned;
console.log("Undefined:", notAssigned);

// 6. Null (intentional absence of value)
let emptyVal = null;
console.log("Null:", emptyVal);

// 7. Symbol (unique identifiers, often used as object keys)
let symA = Symbol("id");
let symB = Symbol("id");
console.log("Symbols unique?", symA === symB); // false

// 🔹 NON-PRIMITIVE DATA TYPES (mutable, stored by reference)
// Non-primitives are objects stored in heap memory.
// When assigned, they pass a **reference**, so changes affect all references.

// 1. Object (collection of key-value pairs)
let person = {
  name: "Alice",
  age: 25,
};
console.log("Object:", person);

// 2. Array (special type of object, ordered collection)
let arr = [1, 2, 3, "JS", true];
console.log("Array:", arr);

// 3. Function (first-class object: can be stored, passed, returned)
function greet(name) {
  return "Hello " + name;
}
console.log("Function:", greet("Bob"));

// 4. Date (built-in object for working with dates)
let today = new Date();
console.log("Date:", today);
// 🔹 VALUE vs REFERENCE (Primitive vs Non-Primitive in action)
// -------------------------------------------------------------

// Example 1: Primitive (copy by value)
let a = 10;
let b = a;   // copy of value
b = 20;      // only b changes
console.log("Primitive example - a:", a, "b:", b); // a=10, b=20

// Example 2: Non-Primitive (copy by reference)
let obj1 = { lang: "JS" };
let obj2 = obj1; // both point to same object in heap
obj2.lang = "C++";
console.log("Non-Primitive example - obj1:", obj1, "obj2:", obj2);
// both changed, because they share reference
//------------------------------------------------------------------
//STACK VS HEAP MEMORY ALLOCATION
let realName="MS DHONI"
let nickName=realName //COPY OF VALUE
nickName="Mahi"       //ONLY NICKNAME CHANGES
console.log(realName); //MS DHONI
console.log(nickName); //Mahi

let userOne={
  name:"One",
  email:"one@google.com"
}
let userTwo=userOne    //copy by reference. both point to same object in heap
userTwo.email="two@google.com" //both changed, because they share reference
console.log(userOne.email);
console.log(userTwo.email);

//




// ====================================================
// 🔹 SUMMARY THEORY
// ====================================================

// ✅ JavaScript data types = Primitive + Non-Primitive
// ✅ Primitive types (Number, String, Boolean, Undefined, Null, BigInt, Symbol)
//      - Stored in stack memory
//      - Immutable
//      - Copy by value
//
// ✅ Non-Primitive types (Object, Array, Function, Date, etc.)
//      - Stored in heap memory
//      - Mutable
//      - Copy by reference
//
// ✅ JavaScript is dynamically typed:
//      - Variable type decided at runtime
//      - Variable can hold different types at different times

