// const languages= ["js", "python", "c++", "java"];

// const values= languages.forEach( (item ,index, arr) => {
//     console.log(item,index,arr);

// } )
// console.log(values);

//filter()
const marks=[10,20,30,40 ,50,60 ,70,80,90,100];

const result= marks.filter( (num) => num>65 ) //arrow fucntion with single parameter and single return statement does not need to write return

console.log(result);

const result2= marks.filter( (num2) => {
    return num2<50;
} )
console.log(result2);

const books = [
  {
    title: "The Guide",
    author: "R.K. Narayan",
    genre: "fiction",
    published: 1958
  },
   {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "fiction",
    published: 1960
  },
  {
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    genre: "history",
    published: 1956
  },
 {
    title: "The Discovery of India", author: "Jawaharlal Nehru",
    genre: "history",
    published: 1946
 },
  {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    genre: "education",
    published: 1999
  },
 {
    title: "Atonement",
    author: "Ian McEwan",
    genre: "romance",
    published: 2001
  },
   {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "romance",
    published: 1813
  },
    {
    title: "Me Before You",
    author: "Jojo Moyes",
    genre: "romance",
    published: 2012
  },
   {
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "romance",
    published: 1996
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "romance",
    published: 2012
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "history",
    published: 1947
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "non fiction",
    published: 2011
  }
];

const user1SearchedBooks= books.filter ( (bk) => bk.genre==="fiction" );
console.log(user1SearchedBooks);
console.log("----");

const user2_search= books.filter( (bk2)=>{
    return bk2.genre==="romance" && bk2.published==2012;
})

console.log(user2_search);


