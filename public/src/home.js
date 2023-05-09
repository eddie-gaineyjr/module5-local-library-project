function sortAnArray(inputArray) {
  inputArray.sort((countA, countB) => (countA.count < countB.count ? 1 : -1));
  return inputArray;
}

function getTotalBooksCount(books) {
  const totalBooks = books.length;
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  const totalAccounts = accounts.length;
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].returned === false) {
        booksBorrowed++;
      }
    } 
  }
  return booksBorrowed;
}

function getMostCommonGenres(books) {
// Function takes in an array of book objects
// Filter books based on genre into a array for each genre
// Count the number of each genre
// Return an array with name and count, no more than 5 objects
  let historicalFictionCounter = 0;
  let scienceCounter = 0;
  let classicsCounter = 0;
  let travelCounter = 0;
  let youngAdultCounter = 0;
  let nonFictionCounter = 0;
  let sortingArray = [{}];
  let returnArray = [{}];
  for (let i = 0; i < books.length; i++){
//     console.log(books[i].genre);
    bookGenre = books[i].genre;
     if (bookGenre === "Historical Fiction") {
    historicalFictionCounter++;
    } else if (bookGenre === "Science") {
      scienceCounter++;
      } else if (bookGenre === "Classics") {
      classicsCounter++;
      } else if (bookGenre === "Travel") {
      travelCounter++;
      } else if (bookGenre === "Young Adult") {
      youngAdultCounter++;
      } else if (bookGenre === "Nonfiction") {
      nonFictionCounter++;
      }
    }     
//   console.log(historicalFictionCounter);
//   console.log(scienceCounter);  
//   console.log(classicsCounter);
//   console.log(travelCounter);  
//   console.log(youngAdultCounter);
//   console.log(nonFictionCounter);  
  sortingArray[0] = {name: "Historical Fiction", count: historicalFictionCounter};
  sortingArray[1] = {name: "Science", count: scienceCounter};
  sortingArray[2] = {name: "Classics", count: classicsCounter};
  sortingArray[3] = {name: "Travel", count: travelCounter};  
  sortingArray[4] = {name: "Young Adult", count: youngAdultCounter};  
  sortingArray[5] = {name: "Nonfiction", count: nonFictionCounter};  
//   console.log (sortingArray);
//   sortingArray.sort((countA, countB) => (countA.count < countB.count ? 1 : -1));
  sortAnArray(sortingArray);
//   console.log(sortingArray);
  return sortingArray.slice(0,5);
}

function getMostPopularBooks(books) {
//   console.log(books);
  let sortingArray = [{}];
  let returnArray = [{}];
  let numberOfBooks = books.length;
  let borrowsCounter = 0;
//   console.log(numberOfBooks);
  for (let i = 0; i < books.length; i++) {
    let bookName = books[i].title;
    borrowsCounter = books[i].borrows.length;    
    sortingArray[i] = {name: bookName, count: borrowsCounter};
  }
//   console.log(sortingArray);
//   sortingArray.sort((countA, countB) => (countA.count < countB.count ? 1 : -1));
     sortAnArray(sortingArray); 
//   console.log(sortingArray);
  for (let i = 0; i < 5; i++){
    returnArray[i] = sortingArray[i];
   }
  return returnArray;
}

function getMostPopularAuthors(books, authors) {
  let sortingArray = [{}];
  let returnArray = [{}];
  let numberOfBooks = books.length;
  let borrowsCounter = 0;
//   console.log("Number of Books: " + numberOfBooks);
  for (let i = 0; i < books.length; i++) {
    let authorId = books[i].authorId;    
    let borrowsCounter = books[i].borrows.length;
//     console.log("Author id: " + authorId);   
//     console.log("Number of Borrows: " + borrowsCounter);
    let foundAuthor = authors.find((author) => author.id === authorId);    
//     console.log(foundAuthor);    
    let authorName = (foundAuthor.name.first + " " + foundAuthor.name.last);
//     console.log(authorName);
    sortingArray[i] = {name: authorName, count: borrowsCounter};
  }
  console.log(sortingArray);
//   sortingArray.sort((countA, countB) => (countA.count < countB.count ? 1 : -1));
  sortAnArray(sortingArray);
  console.log(sortingArray);
  for (let i = 0; i < 5; i++){
    returnArray[i] = sortingArray[i];
   }
  return returnArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
