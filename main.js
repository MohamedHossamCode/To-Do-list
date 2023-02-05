let addLi = document.querySelector(".add");
let lists = document.querySelector(".lists");

addLi.addEventListener("click", () => {
  let list = document.createElement("div");
  list.className = "list";
  let rem = document.createElement("button");
  rem.className = "rem";
  let img = document.createElement("img");
  img.setAttribute("src", "close.png");
  img.setAttribute("alt", "close");
  rem.appendChild(img);
  let header = document.createElement("input");
  header.className = "header";
  header.setAttribute("type", "text");
  let tasks = document.createElement("div");
  tasks.className = "tasks";
  let btn = document.createElement("button");
  btn.innerHTML = "Add new task";
  tasks.appendChild(btn)
  lists.prepend(list);
  list.prepend(tasks);
  list.prepend(header);
  list.prepend(rem)
  // Remove element
  rem.onclick = function () {
    this.parentElement.remove();
  }
  // Add tasks
  btn.onclick = function () {
    let task = document.createElement("div");
    task.className = "task"
    let check = document.createElement("span");
    check.className = "check";
    let txt = document.createElement("input");
    txt.className = "text";
    txt.setAttribute("type", "text");
    btn.parentElement.prepend(task);
    task.prepend(check);
    task.append(txt);
    // check the task
    check.onclick = function () {
      if (check.className === "check") {
        let img = document.createElement("img");
        check.classList.add("done");
      } else {
        check.classList.remove("done");
      };
    };
  };
});