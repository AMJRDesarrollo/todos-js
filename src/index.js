import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('nombre','Rafael');
// sessionStorage.setItem('nombre','Rafael');

// setTimeout( ()=>{
//     localStorage.removeItem('nombre');
// }, 2000);

todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprender Java Script');
// todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos)