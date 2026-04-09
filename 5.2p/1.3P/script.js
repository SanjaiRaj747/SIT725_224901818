let name = "Sanjai Raj";
let studentId = "224901818";

function add(a, b) {
    return a + b;
}

let result = add(5, 10);

document.getElementById("output").innerHTML =
    "Student: " + name + "<br>" +
    "ID: " + studentId + "<br>" +
    "Addition Result: " + result;