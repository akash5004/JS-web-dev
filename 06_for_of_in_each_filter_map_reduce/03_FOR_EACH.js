const languages =["java", "py", "js" ,"cpp"]

languages.forEach( function (vals) {   //callbackfunction has no name.. syntax: function (parameters) {  //function body   };
    console.log(vals);
            }
                 )

console.log("---------------");

languages.forEach (  function ( val,idx ,arr) { //this will print the element ,index and the full array
 console.log(val,idx,arr);
           }
                  )

console.log("--------------");


//using callback arrow functions

//languages.forEach( (val) => {  //callback arrow function has no name
//     console.log(val);
// } )

function print(item){
    console.log(item);
}

languages.forEach(print) //this is not function  call i.e; print().Intead we are passing the function reference
console.log("---------------");


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

