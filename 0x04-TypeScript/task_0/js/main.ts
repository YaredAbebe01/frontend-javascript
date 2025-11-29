// 1. Create the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Yared",
  lastName: "Abebe",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Liya",
  lastName: "Kebede",
  age: 21,
  location: "Adama",
};

// 3. Create an array containing the students
const studentsList: Student[] = [student1, student2];

// 4. Render table using Vanilla JavaScript
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
