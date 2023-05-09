function findAccountById(accounts, id) {
// console.log("ID -------", id);  
//   define variable that will be returned when matched;
//   loop through each account within the array
//   if a match is found, update return variable 
//   else return message id not found
//   return variable or message
  let foundId = "";
//   console.log("Found ID ------", foundId);
  for (let i = 0; i < accounts.length; i++){
//     console.log(accounts[i].id);
    if (accounts[i].id == id) {
      foundId = accounts[i];
    }    
  }
  return foundId;
}

function sortAccountsByLastName(accounts) {
//   Function takes in an array of objects
//   Sort array alphabetically by last name
//   Return sorted array
  const sortedAccounts = accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1);
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
// Function takes in an account object and an array of book objects
// Filter through borrows array within all book objects
// Count the number of times account id appears in borrows array
let matchIdNum = account.id;
console.log(matchIdNum);
let counter = 0;
//console.log(books[1].borrows[0]);
for (let i = 0; i < books.length; i++) {
//   console.log(i, books[i].borrows.length);
  for (let j = 0; j < books[i].borrows.length; j++) {
    let borrowId = books[i].borrows[j].id;
    if (borrowId == matchIdNum) {
//       console.log(books[i].borrows[j].id)
      counter ++;
      }
    }    
}
return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
//Function take in an account object, array of all book objects, an array of all author objects
// Filter through books borrows array to find books checked out by that account
// Return an array of objects of books checked out by that account with author info inside
  let matchIdNum = account.id;
  let returnArray = [];
//   console.log(matchIdNum);
  for (let i = 0; i < books.length; i++) {
  //console.log(i, books[i].borrows.length);
    for (let j=0; j < books[i].borrows.length; j++) {
      let borrowId = books[i].borrows[j].id;
      let checkedOut = books[i].borrows[j].returned;
      if (borrowId == matchIdNum && checkedOut == false) {
        console.log(books[i].borrows[j]);
        const {id, title, genre, authorId} = books[i];
        const borrowAccount = books[i].borrows[j];
        let author = authors.find((author) => author.id === authorId);    
        returnArray = [{id, title, genre, authorId, author, borrowAccount}];     
      }
    }    
  }
//       console.log(author)
//   console.log(returnArray); 
  return returnArray; 
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
