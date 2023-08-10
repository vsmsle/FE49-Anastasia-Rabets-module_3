'use strict'

//Homework 33

//С ниже приведенным объектом решить следующие задачи:

//1. Создать строку из названий предметов написаных через запятую
//2. Посчитать общее количнство студентов и учителей на всех предметах
//3. Получить среднее количество студентов на всех пердметах
//4. Создать массив из объектов предметов
//5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};


//1.Создать строку из названий предметов написаных через запятую

let subjectsArr = Object.keys(subjects);
let subjectsString = subjectsArr.join(', ');
console.log("Task 1"); 
console.log(subjectsString); 


//2.Посчитать общее количнство студентов и учителей на всех предметах

let totalStudents = 0;
let totalTeachers = 0;

for (let key in subjects) {
  totalStudents += subjects[key].students;
  totalTeachers += subjects[key].teachers;
}


console.log("Task 2"); 
console.log("Total students:", totalStudents); 
console.log("Total teachers:", totalTeachers); 


//3.Получить среднее количество студентов на всех пердметах

let subjectsCount = Object.keys(subjects).length;
let averageStudents = totalStudents / subjectsCount;
console.log("Task 3"); 
console.log("Average students:", averageStudents); 


//4.Создать массив из объектов предметов

let subjectsArray = [];

for (let key in subjects) {
  subjectsArray.push(subjects[key]);
  };

console.log("Task 4"); 
console.log(subjectsArray);


//5.Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

let sortedSubjectsArray = Object.keys(subjects).map(subject => ({
    name: subject,
    students: subjects[subject].students,
    teachers: subjects[subject].teachers,
  })).sort((a, b) => b.teachers - a.teachers);
  
console.log("Task 5"); 
console.log(sortedSubjectsArray);
