// Write your code here

function Movie(title, director, genre, year, rating = 0) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.year = year;
  this.rating = rating;
}
Movie.prototype.getOverview = function() { 
  return `${this.title}, a ${this.genre} film ` +
    `directed by ${this.director} ` +
    `was released in ${this.year} year. ` +
    `It recieved a rating of ${this.rating}`;
}
// test
var b1 = new Movie("JS for culchies", "Dostoevsky", "scary", 2023);
console.log(b1.getOverview())
console.log(b1)