import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <article>
        <h3 className="text-center text-capitalize mt-5">Todo-List</h3>
        <ul className="list-group my-5">
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            onClick={clearList}
            className="btn btn-block btn-danger"
          >
            Clear List
          </button>
        </ul>
      </article>
    );
  }
}
