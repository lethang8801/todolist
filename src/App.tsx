import React, { useState } from 'react';
import './App.css';
import Todo from './component/Todo';
import { TypeTodo } from './component/typeTodo';
function App() {
 
   const [todos, setTodos] = useState<TypeTodo[]>([
    { title: "Check on FedEx Order",complete: true },
    { title: "Upload 1099-R to TurboTax", complete: false },
    { title: "Submit 2019 tax return", complete: false },
    { title: "Print parking passes", complete: true },
    { title: "Look at new plugins", complete: true },
    { title: "Respond to catering company" , complete: false },
    { title: "Reschedule morning coffee" , complete: true },
    { title: "Check the latest on Community", complete: true },
   ]);
   const onHandleAdd = (todo:any) =>{
     console.log(todo)
    setTodos([...todos , todo]);
  }
  return (
    <div className="todo">
      <Todo todos = {todos}
            setTodos = {setTodos}
            onAdd={onHandleAdd}/>
    </div>
  );
}

export default App;
