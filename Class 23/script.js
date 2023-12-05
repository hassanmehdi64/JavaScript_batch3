const prgraming = [ 'js', 'cpp', 'rb', 'Swift', 'Java', 'python']

// is foreach return values

const values = prgraming.forEach((item)=>{
    // console.log(item);
})

// console.log(values);


//foreach not return any value






// -----------Filter Operation-----------

// const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter( (num)=> num >2 )
// console.log(newNums);

// it return the array values





// -----------EXample 2----------

 const books = [
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishDate: 1951
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishDate: 1960
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishDate: 1949
    },
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publishDate: 2001
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishDate: 1951
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishDate: 1997
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishDate: 2022
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publishDate: 1937
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishDate: 2003
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publishDate: 1937}
  ];
  

//  const userBooks = books.filter( (book) => book.genre === 'Fantasy')     //implicit retur 

  // ------------------------2nd--------

  const userBooks = books.filter( (book) => {      //explicit return

    return book.publishDate >= 2000  &&  book.genre === 'Dystopian'

  })

  console.log(userBooks)
  




