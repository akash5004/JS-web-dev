 const promiseOne  = new Promise( function (resolve, reject) {


 setTimeout( function(){
    console.log("Async task one is complete");
    resolve();
 }, 1000)
 } )


 promiseOne.then(function(){      // .then is connected to resolve
    console.log("promise one consumed");
 })

//-----------------------------------------------------------------
//the alternate way
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
    }, 3000)
}).then(function(){
    console.log("Async 2 is resolved");
})

//--------------------------------------------------------------------
//resolve(data) ka use
new Promise(function(resolve, reject){
    //simulating anasync taks like api call ,db call

    setTimeout(function(){
        //// Resolving the promise with an object (sending data)
        resolve({
            username:"Akash",
             email:"example@google.com",
             age:21
            })
    },4000)
}).then(function(userDetails){
    console.log("Data of akash:",userDetails);
})

//---------------------------------------------------------------------
//understanding reject and .catch
 const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;

        if(!error){   //!error evauates to true here
            console.log("Data loaded successfully for promiseFour");
            resolve({
                username:"Aniket",
                age:"21"
            })
        }

        else{
            reject("SEVER ERROR:500")
        }

     }, 7000)
 })

 promiseFour
 .then(function(userDetails){
    console.log("Loaded data is:",userDetails);
 })
 .catch(function(errorMsg){
    console.log("Error:", errorMsg);

 })
 .finally(function(){
    console.log("The promise is either resolve or rejected", "this is like default call");
 })
