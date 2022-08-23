document.querySelector("#add-to-do").onclick = function () {
  if (document.querySelector("input").value.length == 0) {
    alert("Please enter a task");
  }
};
