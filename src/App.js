import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container bg-warning">
        <h3>Hello</h3>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
