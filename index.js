let todoName = document.getElementById("input-todo");
let todo = document.getElementById("todos");
let todoContainer = [];
function Addtodo() {
    
    let todos = todoName.value;
   let todo_item = document.createElement('li');
   todo_item.setAttribute('id','list-item');
   todo_item.className = "mt-2"
   let complete = document.createElement('input');
   complete.type = "checkbox";
   complete.id = "iscomplete";
   let del = document.createElement('button');
   del.innerHTML = "Del";
   del.setAttribute('id','delbtn');
   let para = document.createElement('span')
   para.textContent = todos; 
   del.addEventListener('click',()=>{
    todo_item.remove()
   })
   todo_item.append(complete,para,del);
   todo.appendChild(todo_item);
}

