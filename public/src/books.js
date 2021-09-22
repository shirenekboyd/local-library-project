function findAuthorById(authors, id) {
  //find author object that has same id as id parameter
  return authors.find((author) => id === author.id);
}

function findBookById(books, id) {
  //it returns the book object that has the matching ID
  return books.find((book) => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let booksThatAreOut = [];
  
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false){
      returnedBooks.push(books[i]);
    }
  }
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === true){
      booksThatAreOut.push(books[i]);
    }
  }
  return [returnedBooks, booksThatAreOut];
}

function getBorrowersForBook(book, accounts) {
  let bookBorrowers = []
for (let i = 0; i < book.borrows.length; i++){
  for (let j = 0; j < accounts.length; j++){
    if (book.borrows[i].id === accounts[j].id){
      const result = {...book.borrows[i], ...accounts[j]}
      bookBorrowers.push(result)
    }
  }
}
bookBorrowers.splice(10)//return an array of ten or fewer account objects
return bookBorrowers;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
