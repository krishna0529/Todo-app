let todoList = [
  {
    item:'buy Milk',
     dueDate:'4-10-25'
 },
  {
    item:'buy cakes',
     dueDate:'4-10-25'
 }
  ];

TodoContainer();

function addClick(){
  let inputElement = document.querySelector('#input-text');
  let DateElement = document.querySelector('.input-date');
  
  let todoItem =inputElement.value ;
  let DateItem =DateElement.value ;

  todoList.push(
    {
        item: todoItem,
        dueDate: DateItem
    }
  );
  inputElement.value = '';
  DateElement.value = '';

  TodoContainer();

}


function TodoContainer(){

  let ContainerElement = document.querySelector('.todo-container');


  let newHtml = '';

  for(let i =0; i<todoList.length; i++){
   
    let {item ,dueDate} = todoList[i];
    newHtml+=`
    
    <spam>${item}</spam>
    <spam>${dueDate}</spam>
    <button class='btn-delete' onclick='todoList.splice(${i} ,1); TodoContainer();'>Delete</button>
    `
    
    ;
  
}
ContainerElement.innerHTML =newHtml;
}