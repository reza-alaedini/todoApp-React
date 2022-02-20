import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import TodoContext from "../context/todoContext";

const GlobalState = (props) => {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");

  const handleCreateNewTodo = () => {
    const todos = [...getTodos];
    const todo = {
      id: uuidv4(),
      text: getTodo,
      completed: false,
    };
    if (getTodo !== "" && getTodo !== " ") {
      todos.push(todo);
      setTodos(todos);
      setTodo("");
      toast.success("یادداشت ثبت شد✍", {
        position: "top-right",
        theme: "dark",
        closeOnClick: true,
      });
    } else {
      toast.warn(" یه چیزی تو کادر بنویس دیگه مهندس !", {
        position: "top-left",
        theme: "dark",
        closeOnClick: true,
      });
    }
  };
  const handleCompletedTodo = (id) => {
    const todos = [...getTodos];
    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    setTodos(todos);
    // eslint-disable-next-line no-lone-blocks
    {
      todo.completed
        ? toast.info("کار رو انجام دادی !👍", {
            position: "top-right",
            theme: "dark",
            closeOnClick: true,
          })
        : toast.warning("مثل اینکه انجام ندادی !🤔", {
            position: "top-right",
            theme: "dark",
            closeOnClick: true,
          });
    }
  };
  const handleDeleteTodo = (id) => {
    const todos = [...getTodos];
    const todoFilter = todos.filter((t) => t.id !== id);
    setTodos(todoFilter);
    toast.error("یادداشت رو حذف کردی !👋", {
      position: "top-right",
      theme: "dark",
      closeOnClick: true,
    });
  };
  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodos,
        todo: getTodo,
        handleCompletedTodo: handleCompletedTodo,
        handleCreateNewTodo: handleCreateNewTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleTodoInput: handleTodoInput,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
