function myGrade(mark) {
  switch (true) {
    case mark >= 80:
      return "A";
    case mark >= 60:
      return "B";
    case mark >= 50:
      return "C";
    case mark >= 40:
      return "D";
    default:
      return "E";
  }
}

const studentMark = parseFloat(prompt("Enter the student mark (0-100):"));
const grade = myGrade(studentMark);
console.log(`The grade for ${studentMark} is ${grade}.`);
