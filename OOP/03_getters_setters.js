class Product {
    #name;
    #price;
    #rating;

    constructor(name, price, rating) {
        this.name = name;     // uses setter
        this.price = price;   // uses setter
        this.rating = rating; // uses setter
    }

    //  Getter
    get name() {
        return this.#name;
    }

    //  Setter
    set name(n) {
        if (n.length < 2) {
            console.log("Invalid name");
        } else {
            this.#name = n;
        }
    }

    //older way
    /*
    getName(){

    return this.#name;
    }

    setName(n){

    if(n<2) console.log("invalid name");
    else this.#name=n;
    }

//usages
product1.setName("BUDS");
console.log (product1.getName());

    */

    get price() {
        return this.#price;
    }

    set price(p) {
        if (p < 0) {
            console.log("Invalid price");
        } else {
            this.#price = p;
        }
    }

    get rating() {
        return this.#rating;
    }

    set rating(r) {
        if (r < 0 || r > 5) {
            console.log("Rating must be between 0 and 5");
        } else {
            this.#rating = r;
        }
    }

    display() {
        console.log(`Name: ${this.name}, Price: ${this.price}, Rating: ${this.rating}`);
    }
}
const product1 = new Product("Realme Buds T310", 1899, 4.5);

product1.display();

// Looks like property, but actually calls setter/getter
product1.name="samsung galaxy buds" ; //setter called
product1.price = 25000; //setter called
product1.rating=5.0;
console.log(product1.name); //getter called
console.log(product1.price); //getter called
console.log(product1.rating); //getter called

product1.display();





