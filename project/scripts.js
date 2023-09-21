//Begin Button
//variables
let person = "";
let budget = Number(0);
let needs = Number(0);
let savings = Number(0);
let wants = Number(0);

function myBudget() {
    person = prompt("Please enter your name or ID");
    budget = prompt("Please enter your monthly salary");
    needs = budget * .5;
    savings = budget * .2;
    wants = budget * .3;

    userInput = document.getElementById("part1");
    helloMessage = document.createElement("p");
    helloMessage.textContent = `Hello ${person}! Here is your budget for this month: $ ${budget}`;
    userInput.appendChild(helloMessage);

}

document.getElementById("addButton").addEventListener("click", myBudget);

// document.addEventListener()
// addButton.addEventListener('click', function () {})







// document.addEventListener('DOMContentLoaded', function () {
//     console.log('skgjnskjgn')
//     const addButton = document.getElementById('addButton');
//     const newTaskInput = document.getElementById('newTask');
//     const taskList = document.getElementById('taskList');

//     addButton.addEventListener('click', function () {
//         const taskText = newTaskInput.value;

//         if (taskText !== '') {
//             const taskItem = document.createElement('li');
//             taskItem.textContent = taskText;

//             taskItem.addEventListener('click', function () {
//                 taskItem.classList.toggle('completed');
//             });

//             taskList.appendChild(taskItem);
//             newTaskInput.value = '';
//         }
//     });
// });



