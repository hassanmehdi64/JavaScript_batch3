const prgraming = [ 'js', 'cpp', 'rb', 'Swift', 'Java', 'python']

// is foreach return values

const values = prgraming.forEach((item)=>{
    console.log(item);
})

console.log(values);


//foreach not return any value












// -----------Filter Operation-----------
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> num >2 )
// console.log(newNums);

// it return the array values



// -----------EXample 2----------

 const books = [
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishDate: "1951-07-16"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishDate: "1960-07-11"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishDate: "1949-06-08"
    },
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publishDate: "1925-04-10"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishDate: "1951-07-16"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishDate: "1997-06-26"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishDate: "1960-07-11"
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publishDate: "1937-09-21"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishDate: "1949-06-08"
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publishDate: "1954-07-29"
    }
  ];
  

  // const userBooks = books.filter( (book) => book.genre === 'Fantasy')

  // console.log(userBooks);
  