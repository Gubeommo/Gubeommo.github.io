const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const doneLists = document.getElementById("done");

const TODOS_KEY = "todo";
const DONE_KEY = "done"
let toDos = [];
let doneDos= [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveDoneTodos(){
    localStorage.setItem(DONE_KEY, JSON.stringify(doneDos));
}

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
   saveToDos();
}

function deleteDoneList(event){
   const lie = event.target.parentElement;
   lie.remove();
   doneDos = doneDos.filter((Done) => Done.id !== lie.id);

   saveDoneTodos();
}

function handleTodoSubmit(event){
    
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text :newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function doneToDolist(event){
    let num=0;
    const doneTodo = event.target.parentElement;
    for (let i =0; i === toDos.length;i++){
          if ( toDos[i].id ===doneTodo.id){
              num += i;
              console.log("dk");
              break;
          }else
          {
              console.log("dalse");
          }
    }
    const doneTodoObj = {
        text :toDos[num].text,
        id : doneTodo.id,
    };
    doneDos.push(doneTodoObj);
    doneToDoPro(doneTodoObj);
    saveDoneTodos();
    deleteToDo(event);
}

function doneToDoPro(doneTodo){
    
    const lia =document.createElement("li");
    lia.id = doneTodo.id;
    const span = document.createElement("span");
    const deletebuttons = document.createElement("button");
    deletebuttons.id = "deleteBtn"
    deletebuttons.innerText=" ";
    deletebuttons.addEventListener("click",deleteDoneList);
    lia.appendChild(span);
    lia.appendChild(deletebuttons);
    span.innerHTML = doneTodo.text;
    doneLists.appendChild(lia);
 }

function paintToDo(newTodo){
   const li =document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   const deletebutton = document.createElement("button");
   const okbutton = document.createElement("button")
   okbutton.id = "okBtn";
   okbutton.innerText = " ";
   deletebutton.id = "deleteBtn"
   deletebutton.innerText=" ";
   deletebutton.addEventListener("click",deleteToDo);
   okbutton.addEventListener("click",doneToDolist);
   li.appendChild(span);
   li.appendChild(okbutton);
   li.appendChild(deletebutton);
   span.innerHTML = newTodo.text;
   toDoList.appendChild(li);
}
toDoForm.addEventListener("submit",handleTodoSubmit);

function goodFilter(){

}

const savedTodolist= localStorage.getItem(TODOS_KEY);
const savedDonelist= localStorage.getItem(DONE_KEY);

if(savedTodolist !== null){
   const parsedToDos = JSON.parse(savedTodolist);
   toDos = parsedToDos;
   parsedToDos.forEach(paintToDo);
}

if(savedDonelist !== null){
    const parsedDoneToDos = JSON.parse(savedDonelist);
    doneDos = parsedDoneToDos;
    parsedDoneToDos.forEach(doneToDoPro);
 }
 


