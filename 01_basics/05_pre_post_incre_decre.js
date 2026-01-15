// 1. Pre-increment (++x)
let a = 5;
console.log("Pre-increment:");
console.log("Before:", a);   // 5
let b = ++a;  // increase a by 1 ,then a=5+1=6, , then assign a=6 to b
console.log("After:", a);    // 6
console.log("Result (b):", b); // 6
console.log("-------------------");

// 2. Post-increment (x++)
let x = 5;
console.log("Post-increment:");
console.log("Before:", x);   // 5
let y = x++;  // assign x =5 to y, then x becomes 6
console.log("Result (y):", y); // 5
console.log("After:", x);    // 6
console.log("-------------------");

// 3. Pre-decrement (--x)
let m = 5;
console.log("Pre-decrement:");
console.log("Before:", m);   // 5
let n = --m;  // m = 4, then assign to n
console.log("After:", m);    // 4
console.log("Result (n):", n); // 4
console.log("-------------------");

// 4. Post-decrement (x--)
let p = 5;
console.log("Post-decrement:");
console.log("Before:", p);   // 5
let q = p--;  // assign p (5) to q, then p becomes 4
console.log("Result (q):", q); // 5
console.log("After:", p);    // 4
