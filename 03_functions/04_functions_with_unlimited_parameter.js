//func with unlimited num of parameters
//argument keyword

function  sumOfAllParameters(){
    let sum=0;
    for(let i=0; i<arguments.length; i++)
        sum +=arguments[i];
    return sum;
}
//function call
let result = sumOfAllParameters(1,2,3,4,5); //internally arguments=[1,2,3,4,5]
console.log(result);

/* arguments is a special built-in object available inside every regular function in JavaScript.

It contains all the values passed to the function, even if no parameters are defined.

🔹 Key Properties of arguments
arguments.length → total number of arguments passed
arguments[i] → access each argument
It is array-like, but not a real array */
