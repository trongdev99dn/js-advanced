var readlineSync = require('readline-sync');

var fs = require('fs');
const { parse } = require('path/posix');
function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}
var student = [];
function showMenu(){
    console.log('1. show all students');
    console.log('2. create a new student');
    console.log('3. Save & Exit');

    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            console.log(students);
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;



    }

}
function showStudent(){
    for (var student of students){
    console.log(student.name, student.age);
    }
     
}
function showCreateStudent(){
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question(' Age: ');
    var student = {
        name: name,
        age: parseInt(age)
         
    };
    students.push(student);
     
}
function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encodeing: 'utf8' });
}
function main(){
    loadData();
    showMenu();
    
}
main();