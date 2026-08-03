
const student = {
    Name: "Arpita Sharma",
    Age: 21,
    Address: {
        country: "Nepal",
        place: "Tilottama-11, Gaighat",

    },
    Gender: "Female",
    ispresent: true,
    marks: [50, 60, 70],
}
student.Address.zipcode = 976760;
student.semester = "2";
console.log(student);
console.log(student.Name);
console.log(student.ispresent);
console.log(student.Address.country);

console.log(student.marks[1]);

console.log(student["Name"]);
console.log(student.marks[3] = "49");



