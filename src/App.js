import React from 'react';
import logo from './platzi.webp';
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './ToDoList';
import './App.css';
import { TodoItem } from './ToDoItem';
import { CreateButtonTodo } from './CreateButton';

const defaultToDos = [
  {text: 'comerme e Joshi', completed : true},
  {text: 'lavar loza', completed : false},
  {text: 'hacer aseo', completed : false},
  {text: 'ir al gym', completed : false}
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>

        {defaultToDos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}

      </TodoList>

        <CreateButtonTodo/>  
    </React.Fragment>
  );
}





export default App;

