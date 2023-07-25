// Write your code here

class Book {
  constructor(title, author, isbn, numCopies = 0) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }
  get availability() { 
    return this.getAvailability();
  }
  getAvailability() {
    return (! this.numCopies) ? "out of stock" : 
        (this.numCopies < 10) ? "low stock" : "in stock";
  }
  sell(numSold = 1) {
    this.numCopies -= numSold;
    if (this.numCopies < 0) this.numCopies = 0;
  }
  restock(numRestock = 5) {
    this.numCopies += numRestock;
  }
}


// function Book(title, author, isbn, numCopies = 0) {
//   return {
//     title : title,
//     author : author,
//     isbn : isbn,
//     numCopies : numCopies,
//     getAvailability : function() {
//       return (!this.numCopies) ? "out of stock" : 
//         (this.numCopies < 10) ? "low stock" : "in stock";
//     },
//     sell : function(numSold = 1) {
//       this.numCopies -= numSold;
//       if (this.numCopies < 0) this.numCopies = 0;
//     },
//     restock : function(numRestock = 5) {
//       this.numCopies += numRestock;
//     }
//   }
// }


// function Book(title, author, isbn, numCopies = 0) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
//   this.numCopies = 0;
// }
// Book.prototype.getAvailability = () => {
//   return (!this.numCopies) ? "out of stock" : 
//     (this.numCopies < 10) ? "low stock" : "in stock";
// }   
// Book.prototype.sell = (numSold = 1) => {
//   this.numCopies -= numSold;
//   if (this.numCopies < 0) this.numCopies = 0;
// }
// Book.prototype.restock = (numRestock = 5) => {
//   this.numCopies += numRestock;
// }

// test
var b1 = new Book("JS for culchies", "Dostoevsky", "666", 12);
console.log(b1.getAvailability())
b1.sell(10);
console.log(b1.getAvailability())
b1.sell(10);
console.log(b1.availability)
b1.restock(666);
console.log(b1.availability)