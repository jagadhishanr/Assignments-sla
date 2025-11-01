const students = [
  ["jagan", 85],
  ["priya", 92],
  ["arun", 78],
  ["mariya", 90]
];
students.forEach(student => {
  const [name, marks] = student;
  console.log(`Name: ${name}, Marks: ${marks}`);
});
