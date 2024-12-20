"use strict";
// Define the array of people
const people = [
    { name: "Jennilee Sodory", dateOfBirth: "10/10/1995", children: 3, country: "Indonesia", knowsHowToProgram: false },
    { name: "Garrick Ryder", dateOfBirth: "12/11/1983", children: 0, country: "Colombia", knowsHowToProgram: true },
    { name: "Brana Cogswell", dateOfBirth: "3/11/1986", children: 0, country: "Indonesia", knowsHowToProgram: false },
    { name: "Ferdinanda Feehan", dateOfBirth: "12/7/1984", children: 2, country: "Russia", knowsHowToProgram: true },
    { name: "Fancie Midlar", dateOfBirth: "12/24/1983", children: 4, country: "Panama", knowsHowToProgram: true },
];
// Helper function to calculate age based on date of birth
function calculateAge(dateOfBirth) {
    const [month, day, year] = dateOfBirth.split("/").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// Question 1: Is the first person older than the last person?
const firstPersonAge = calculateAge(people[0].dateOfBirth);
const lastPersonAge = calculateAge(people[4].dateOfBirth);
console.log("Question 1:");
if (firstPersonAge > lastPersonAge) {
    console.log("The first person is older than the last person.");
}
else {
    console.log("The first person is not older than the last person.");
}
// Question 2: Does the 2nd person have the same amount of kids as the 3rd?
console.log("\nQuestion 2:");
if (people[1].children === people[2].children) {
    console.log("The 2nd person has the same number of kids as the 3rd.");
}
else {
    console.log("The 2nd person does not have the same number of kids as the 3rd.");
}
// Question 3: Do the 1st and 4th persons both know how to program?
console.log("\nQuestion 3:");
if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {
    console.log("Yay!");
}
else {
    console.log("LMGTFY");
}
// Question 4: Nationality check for the 2nd person
console.log("\nQuestion 4:");
switch (people[1].country) {
    case "Iceland":
        console.log("Hæ");
        break;
    case "Spain":
        console.log("Hola");
        break;
    case "Korea":
        console.log("여보세요");
        break;
    default:
        console.log("Hello");
        break;
}
// Question 5: Is the 2nd person's name longer than 5 characters?
console.log("\nQuestion 5:");
const nameLengthMessage = people[1].name.length > 5
    ? "The 2nd person's name is longer than 5 characters."
    : "The 2nd person's name is not longer than 5 characters.";
console.log(nameLengthMessage);
