// Write your code here
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = 0;
  }
  get getAvailability() {
    return (!this.numCopies) ? "out of stock" : 
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