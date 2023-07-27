// Write your code here

String.prototype.urlfy = function() {
  return this.trim()
    .replace(/[^a-zA-Z\s]/g, '')
    .replace(/\s+/g, '-')
    .toLocaleLowerCase();
}

//test
console.log("My Blog   Name!".urlfy());
console.log("Emma's Blog".urlfy());
console.log("How I Got Into Programming!!!".urlfy());