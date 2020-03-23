import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem />
        <h3>Hello from todoList</h3>
      </div>
    );
  }
}
