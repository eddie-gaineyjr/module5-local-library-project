function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedArray = [];
  let checkedOutArray = [];
  let totalBookArray = [];
  for (let i = 0; i < books.length; i++) {
    let bookStatus = books[i].borrows[0].returned;
//       console.log(bookStatus);
      if (bookStatus === true) {
        returnedArray.push(books[i]);
      } else checkedOutArray.push(books[i]);
  }  
//   console.log (returnedArray);
//   console.log (checkedOutArray.length);
  totalBookArray.push(checkedOutArray);
  totalBookArray.push(returnedArray);
  return totalBookArray;
}

function getBorrowersForBook(book, accounts) {
// Function takes in a book object and an array of account objects
// Match on the id listed in borrows to find the account that checked out the book
// Return and array of account objects that checked out the book along with the retuned status
//console.log(book);
  let returnArray = [];
  for (let i = 0; i < book.borrows.length; i++) {   
     let borrowId = book.borrows[i].id;
     let returned = (book.borrows[i].returned);
//      console.log(i);
//      console.log(borrowId);
//      console.log("returned: " + bookStatus + ",");
    for (j = 0; j < accounts.length; j++) {
     if (borrowId === accounts[j].id) {
//       console.log (accounts[j].id);
      const {id, picture, age, name, company, email, registered} = accounts[j];
      returnArray.push({id, returned, picture, age, name, company, email, registered});
     }  
   }  
 } 
//   console.log(returnArray);
  return returnArray.slice(0,10);
//  console.log(returnArray);
//   return(returnArray);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
