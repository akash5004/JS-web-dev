//arrow functions(also called fat arrow functions)
//shorthand for writing functions
//1.  one parameter and a single return statement

const sqr =(x)=> x*x //sqr is function,(x) is parameter,returns =>x*x ,, for a single return statement { ... } and return ketword are not necesaary

//function call
let output1 = sqr(5);
console.log(" square of x is :",output1);

console.log("Square if x is:",sqr(5)); //direct printing of return val of function sqr--> 25


 //2.multiple parameter and a single return statement

const sum= (x,y) =>  x+y  //{  } and return keyword are not necesarry for single return expression- called implicit return
let output2= sum(12,9)
console.log(output2);

//3.multiple statement in function expressions/ body
const sumOf2Num=(x,y)=>{
    console.log(`adding ${x} and ${y}:`);  //return keyword must be used if expression is more than one and should be put in braces{ }
    return x+y;
}
console.log(sumOf2Num(5,9));

//4.returning an object

const sumAndDifference=(x,y) => ( {sum:x+y, difference:x-y} ) //to return object you must wrap it in ( )
let output4=sumAndDifference(3,5)
console.log(output4);
console.log(sumAndDifference(3,5));

//parentheses are optional in the case of a single parameter. eg. const sqr = x => x*x; i.e; x is single parameter here and single return statement is x*x
//return keyword is not reqiured for a single return expression in the function body
//must use parentheses in case of multiple parameters.
//return keyword is required in case of multiple statements in the function
//to return an object notation, wrap it with parentheses


