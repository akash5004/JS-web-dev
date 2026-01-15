const myObject={
    js:"javascript",
    cpp: "C++",
    py:"python",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
console.log(key);            //this will only print js cpp py rb swift
}

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
}

//for in loop in arrays
const lang =["cpp", "py", "js"]

for (const key in lang) {
   console.log(lang[key]);

}

