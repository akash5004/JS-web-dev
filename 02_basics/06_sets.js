const mySet= new Set(["a","b","c", "c", "a","a"]);  //on;y distinct elements are stored
console.log(mySet);

console.log(mySet.size); //3 unique elemnets

mySet.add(1); 
mySet.add(2);
mySet.add(1);
mySet.add(2);

console.log(mySet); //Set(5) { 'a', 'b', 'c', 1, 2 }

// mySet.clear(); //clears all values of set



