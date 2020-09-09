import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";

import Header from "./Components/logo";
import Todo from "./Components/Todo";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <Header style={{ alignItems: "center" }} />
        <h1>Todo App with Context API</h1>
        <TodoForm />
        <Todo />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
