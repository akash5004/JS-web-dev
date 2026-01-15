//func with unlimited num of parameters
//argument keyword

function  sumOfAllParameters(){
    let sum=0;
    for(var i=0; i<arguments.length; i++)
        sum +=arguments[i];
    return sum;
}
//function call
let result = sumOfAllParameters(1,2,3,4,5,6);
console.log(result);

