// Write your code here
const passwordStrength = pass =>
  pass.length > 7 && 
  /^.*[a-z].*$/g.test(pass) && 
  /^.*[A-Z].*$/g.test(pass) && 
  /^.*\d.*$/g.test(pass) &&
  /^.*[!@#$%^&*].*$/g.test(pass) ?
  "Your password is valid" : "Your password is invalid"
  
  // test
console.log(passwordStrength("abc"));
console.log(passwordStrength("9Ab!4567"));