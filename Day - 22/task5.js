function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
Student.prototype.introduce = function() {
  console.log(`Hi, I'm ${this.name} and I'm in grade ${this.grade}.`);
};
const student1 = new Student("Alice", 10);
const student2 = new Student("Bob", 12);

student1.introduce();
student2.introduce();
