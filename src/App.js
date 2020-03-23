import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "Order Medicines" },
      { id: 2, title: "Do laundry" }
    ],
    // id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    console.log("handle Submit");
  };
  handleChange = e => {
    console.log("handle Change");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleDelete = id => {
    console.log("handle Delete");
  };
  handleEdit = id => {
    console.log("handle Edit");
  };

  render() {
    return (
      <section>
        <div className="container bg-success">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h2 className="text-capitalize text-center">
                Hello from TODOLIST
              </h2>
              <TodoInput
                item={this.state.item}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleEdit={this.handleEdit}
              />
              <TodoList
                item={this.state.items}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                clearList={this.clearList}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
