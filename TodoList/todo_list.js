const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];
function addTask() {
    //store the input value in a var so we can 
    //empty it and reuse it in other tasks.
    const taskText=taskInput.value;
    if(taskText!=" "){
        //save the input value in key value
        //objct lateral and push it to the tasks array

        tasks.push({text:taskText});
        //empty the input value 
        taskInput.value="";
        displayTasks();
    }}
          
    
        function displayTasks() {
taskList.innerHTML="";
//empty the task list in the html 
//so that each its called it doesnt
//write the tasks again the list ul
//now loop through each tasks
tasks.foreach(task,index=>{
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
});



        }
                function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);


