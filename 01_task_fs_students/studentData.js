const Student = require('./student');

let students = [
    new Student(1, 'Ira', 'Ostapuk', 'HTML, CSS, JS', 18),
    new Student(2, 'Viktor', 'Guru', 'Java, JS, NodeJs', 20),
    new Student(3, 'Pepe', 'Pingvinivna', 'Java', 20),
    new Student(4, 'Frenk', 'Vuf', 'HTML, CSS', 18)
];

module.exports = students;