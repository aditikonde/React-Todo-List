import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item d-flex my-2 justify-content-between text-capitalize  ">
        <h5>{title}</h5>
        <div className="todo-list-icon">
          <span className="text-success mx-2" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="text-danger mx-2" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
