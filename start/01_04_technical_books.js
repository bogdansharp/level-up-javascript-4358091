class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here

class TechBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }
  getEdition() {
    return `The current edition of this book is ${this.edition}`;
  }
  //get edition() { return getEdition(); }
}

// test
const b1 = new TechBook("Hello world", "Kukushkin", 666, 100, 1);
const b2 = new TechBook("Quantum phisics", "Pupkin", 777, 5, 8);
console.log(b1);
console.log(b1.availability);
console.log(b1.getEdition());
console.log(b2);
console.log(b2.availability);
console.log(b2.getEdition());