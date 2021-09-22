function findAccountById(accounts, id) {
  //loop through the array of accounts using find ()
  let found = accounts.find((account) => account.id === id);
  return found;
  }

function sortAccountsByLastName(accounts) {
  //use sort () method 
  let sort = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1);
  return sort;
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  for (let i = 0; i < books.length; i++){

    for (let j = 0; j <books[i].borrows.length; j++){
      if (account.id === books[i].borrows[j].id) {
        numberOfBorrows++
        
      }
    }
  }
  return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
 
  let checkedOutBooks = books.filter((book) => book.borrows[0].returned === false);
  let accountBooks = checkedOutBooks.filter((book) => book.borrows[0].id == account.id)
  
  for (let i = 0; i < accountBooks.length; i++)
    for (let j = 0; j < authors.length; j++){
      if (accountBooks[i].authorId === authors[j].id){
        accountBooks[i].author = authors[j]
      }
   }
  return accountBooks;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
