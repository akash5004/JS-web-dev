const nums= [1,2,3,4,5,6,7,8,9,10];

let result= nums.map( (num)=> {
    return num+10;
}  )

console.log(result);

//chaining of map or filter
result=nums.map( (num)=> num*10 )
           .map((num)=> num+1)
           .filter( (num)=> num> 50);

console.log(result);


