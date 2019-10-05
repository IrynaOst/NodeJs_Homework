const fs = require('fs');

const students = require('./studentData');

let student1800Folder = './jscx-1800';
let student2000Folder = './jscx-2000';

fs.mkdir(student1800Folder, err => {
    if (!err){
        console.log('OkiDoki')
    }
});

fs.mkdir(student2000Folder, err => {
    if (!err){
        console.log('OkiDoki')
    }
});
 
students.forEach(student => {
    let folder = student.lessonTime == 18 ? student1800Folder : student2000Folder;
    let path = `${folder}/${student.name} ${student.surname}`;
    fs.mkdir(path, err => {
        if (!err){
            console.log('Created folder with new student');
        }
    });
    fs.writeFile(`${path}/info.js`, `${JSON.stringify(student)}`, err => {
        if (!err){
            console.log('Created info of students');
        }
    });
    fs.createReadStream(`./photos/${student.id}.jpg`).pipe(fs.createWriteStream(`${path}/logo.jpg`));
});