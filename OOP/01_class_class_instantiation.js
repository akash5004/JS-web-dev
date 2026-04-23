class Product{
//properties and behaviours are added here
//behaviours are functions-> called memeber functions
name;
price;
rating;

display(){
    console.log("displaying the current product");

}
}

const watch= new Product(); //watch is object.    syntax= type object_name= new class_name();

console.log(watch); //Product { name: undefined, price: undefined, rating: undefined }

watch.name="titan";
watch.price=1000;
watch.rating=4.4;

console.log(watch); //Product { name: 'titan', price: 1000, rating: 4.4 }

watch.display();  //displaying the current product

// const earbuds= new Product("REALME T310" , 1899 , 4.2);  //this will not work becuase we have not created a constructor yet
// console.log(earbuds);


