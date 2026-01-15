const lang =["c", "py", "js" ,"cpp"]

// lang.forEach( function (values) {
//     console.log(values);
// } )
// console.log("-----");

// lang.forEach( function ( val,idx ,arr) {
//  console.log(val,idx,arr);
// } )

//using arrow functions
// lang.forEach( (val) => {
//     console.log(val);
// } )

function print(item){
    console.log(item);
}

lang.forEach(print)

const arr_of_obj=[
    {
    name:"java",
    file:"java"
},
    {
    name:"javascript",
    file:"js"
},
    {
    name:"python",
    file:"py"
}
]

arr_of_obj.forEach( (item) => {
    console.log(item.name);

} )

