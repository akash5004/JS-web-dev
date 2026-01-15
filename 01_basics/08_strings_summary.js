
// STRINGS IN JAVASCRIPT
console.log("=== 1. Declaring Strings ===");
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello ${str2}`; // Template literal
console.log(str1, str2, str3);

//Once created , a string cannot be changed but can be replaced
let str = "Hello";
str[0] = "J"; // ❌ No effect
str = "Jello"; // ✅ New string assigned

console.log("\n"+str);



console.log("\n=== 2. Accessing Characters ===");

let word = "JavaScript";
console.log(word[0]);       // J
console.log(word.charAt(4));// S
console.log(word[word.length - 1]); // t


console.log("\n=== 3. String Length ===");

console.log(word.length); // 10


console.log("\n=== 4. Changing Case ===");
console.log(word.toUpperCase()); // JAVASCRIPT
console.log(word.toLowerCase()); // javascript


console.log("\n=== 5. Searching in Strings ===");

let text = "Hello JavaScript World";
console.log(text.indexOf("Java"));      // 6
console.log(text.lastIndexOf("a"));     // 9
console.log(text.includes("World"));    // true
console.log(text.startsWith("Hello"));  // true
console.log(text.endsWith("d"));    // true


console.log("\n=== 6. Extracting Substrings ===");
console.log(word.slice(1, 4));     // Java
console.log(word.substring(4, 10));// Script
console.log(word.substr(0, 4));    // Java (deprecated but works)


console.log("\n=== 7. Trimming ===");
let messy = "   Trim me!   ";
console.log(messy.trim());      // "Trim me!"
console.log(messy.trimStart()); // "Trim me!   "
console.log(messy.trimEnd());   // "   Trim me!"


console.log("\n=== 8. Replacing ===");
let sentence = "I love Python";
console.log(sentence.replace("Python", "JavaScript")); // I love JavaScript
console.log(sentence.replace(/o/g, "0")); // I l0ve Pyth0n (regex)

console.log("\n=== 10. Repeating & Padding ===");
let greet = "Hi";
console.log(greet.repeat(3)); // HiHiHi
let num = "7";
console.log(num.padStart(4, "0")); // 0007
console.log(num.padEnd(4, "*"));   // 7***


console.log("\n=== 12. Template Literals ===");
let name = "John";
let age = 25;
let message = `Hello, my name is ${name}.
I am ${age} years old.
Next year I will be ${age + 1}.`;
console.log(message);


console.log("\n=== 13. Escape Characters ===");

console.log("He said \"Hello\"");
console.log('It\'s fine');
console.log("Line1\nLine2");
console.log("Tab\tSpace");








