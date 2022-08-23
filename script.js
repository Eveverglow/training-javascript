document.querySelector("#add-to-do").onclick = function () {
  if (document.querySelector("input").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector(".list").innerHTML += ` 
    <div class="list-item">
    <li>  ${document.querySelector("input").value}</li>
    <button class="bin"></button>
  </div>
                  
`;

    let taskToDo = document.querySelectorAll(".bin");
    for (let i = 0; i < taskToDo.length; i++) {
      taskToDo[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let listOfTasks = document.querySelectorAll(".list-item");
    for (let i = 0; i < listOfTasks.length; i++) {
      listOfTasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("input").value = "";
  }
};
