const input = document.getElementById('todo');
const addBtn = document.getElementById('button');
const container = document.getElementById('container');
const tasks = document.getElementById('tasks');
const deleteBtns = document.querySelectorAll('.delete');



/**
 * Adds a new task to the task container.
 * Retrieves the value from the input field, validates it, and appends a new task item
 * with a delete button to the tasks list. If the input is empty, alerts the user.
 * Clears the input field after adding the task.
 *
 * @function
 * @returns {void}
 */
const addTaskToContainer = () => {
   const todo = input.value;
   if(todo === "") {
        alert("Please enter a task !");
        return 
   }
   else {
       tasks.innerHTML += `<li>${todo}</li><button type="button" class="text-white bg-red-400 py-2 px-3 rounded-lg cursor-pointer col-start-3 delete">Delete</button>`
       container.appendChild(tasks);
   }
 
   input.value = "";
}
  
/**
 * Handles the deletion of a task from the container when the "Delete" button is clicked.
 * Removes both the task element (assumed to be the previous sibling of the button)
 * and the "Delete" button itself from the DOM.
 *
 * @param {Event} e - The event object triggered by the click event.
 */
const deleteTaskFromContainer = (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Delete") {
        const currentTask = e.target;
        const siblingElement = currentTask.previousElementSibling;
        if(siblingElement) {
            siblingElement.remove();
            currentTask.remove();
        }
    }
   
}

addBtn.addEventListener('click', addTaskToContainer);
document.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
        addTaskToContainer();
    }
});
container.addEventListener('click', deleteTaskFromContainer)