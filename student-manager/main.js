"use strict"

let student=[];
function addStudent(){

    console.log("Agregar estudiante");
    const name = document.getElementById("nameInput").value.trim();
    const grade = parseFloat(document.getElementById("gradeInput".value));

    if (name ==="" ||isNaN(grade) ){
        alert("Please enter a valid data")
        return;
    }
    const student = {
        name,
        grade,
        status: this.grade >= 70 ? "Passed" : "Failed",
    };
    student.push(student);
    console.log(student);

}