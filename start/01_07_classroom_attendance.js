// Write your code here
const getStudents = (param) => {
  let {hasTeachingAssistant, classList} = param;
  if (hasTeachingAssistant)
    [teacher, assistant, ...students] = classList;
  else
    [teacher, ...students] = classList;
  return students;
}

// test
console.log(getStudents({
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
}));