import React, { Component } from "react";
// import { default as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const itemId = this.state.id + 1;
    const newItem = {
      id: itemId,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        editItem: false,
        id: itemId
      },
      () => console.log(this.state.items)
    );
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  clearList = () => {
    this.setState({ items: [] });
  };
  handleDelete = id => {
    const list = this.state.items.filter(item => item.id !== id);
    this.setState({ items: list });
  };
  handleEdit = id => {
    const list = this.state.items.filter(item => item.id !== id);
    const selected = this.state.items.find(item => id === item.id);
    this.setState({
      id: id,
      items: list,
      item: selected.title,
      editItem: true
    });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h2 className="text-capitalize text-center">Add Item</h2>
              <TodoInput
                item={this.state.item}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleEdit={this.handleEdit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
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
