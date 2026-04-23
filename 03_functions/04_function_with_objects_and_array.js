let customer ={
    customername:"AKASH",
    price:200,
}

function handleObject(anyobject){
return ` customer name is ${anyobject.customername} and price of item is ${anyobject.price}`
}

console.log(handleObject(customer));

//we can directly pass object to the function

 console.log(handleObject({
    customername:"AKASH",
    price: 999,
}));


function cartPrice(...num){
    return num;
}
console.log (cartPrice(999,545,8000)); // [ 999, 545, 8000 ]

const newArray= [100, 400, 199,305];

function returnAnyElement(getArray){
    return getArray[2]
}
console.log(returnAnyElement(newArray));

