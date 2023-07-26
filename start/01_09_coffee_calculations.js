// Write your code here
const totalPrice = (li) => 
  `The total bill is ${li.reduce((sum, a) => sum += a, 0) * 1.25}`;

  // test
  console.log(totalPrice([2, 5, 7, 1, 4]));