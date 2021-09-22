function helperFunction(arr){
  return arr.reduce((counter, index) => counter+= 1, 0);
}

function getTotalBooksCount(books) {
  //use the .length to get the total number of books
  return helperFunction(books);
}

function getTotalAccountsCount(accounts) {
  //use the .length to get the total number of accounts
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //set a counter
  let booksBorrowed = 0;
  // loop through books object 
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false) {
      //conditional statement that's looking at the first transaction object index value in the `borrows` array of each book
      booksBorrowed++
      //the counter will only add up the books that have their first index value for returned:'false'
    }
  }
  return booksBorrowed;
  //return a number
}


function getMostCommonGenres(books) {
  // create new array of most common genres - use reduce() ?
  let result = books.reduce((acc, book) => {
    // get the genre of current book
    let genre = book.genre;

    // get object in acc that has "name === genre"
    let genreInformation = acc.find((element) => element.name === genre);

    // if an object was not found, create a new one and push it into acc
    if (!genreInformation) {
      const newGenreInformation = {
        name: genre,
        count: 1,
      };
      acc.push(newGenreInformation);
    } else {
      // if object was found, then add one to count
      genreInformation.count++;
    }
//console.log(acc);
    return acc;
  }, []);

   // sort the array by count from greatest to least
  result.sort((genreA, genreB) => genreB.count - genreA.count);

  // limit array to 5
  result.splice(5);

  return result;
}


function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  })
  .sort((superA, superB) => (superA.count < superB.count ? 1 : -1))
  .slice(0, 5);
}
  

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  
  for (let i = 0; i < authors.length; i++){
    let found = books.find((book) => book.authorId === authors[i].id);

    const author = {name: `${authors[i].name.first} ${authors[i].name.last}`, count: 0};

    for (let j = 0; j < found.borrows.length; j++){
      author.count++
    }
    popularAuthors.push(author)
  }
  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);

  popularAuthors.splice(5);
  return popularAuthors;
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
