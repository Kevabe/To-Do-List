import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

const App = () => {
  const headerText = "The To-Do List";
  const [todos, setTodos] = useState([
    {
      title: "Learn how to code",
      isCompleted: false
    },
    
    {
      title: "Eat lunch",
      isCompleted: false
    },
    {
      title: "Spend time with my kids",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { title: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let currentTodos = [...todos];
    currentTodos.splice(index, 1);
    setTodos(currentTodos);
  };

  return (
    <div className="main">
      <h1 className="header">{headerText}</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, i) => (
        <Todo index={i} key={i} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default App;