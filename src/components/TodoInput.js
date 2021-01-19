import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const {
      item,
      handleChange,
      handleSubmit,
      handleEdit,
      editItem
    } = this.props;
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                {/* <i className="fas fa-pencil-alt"></i> */}
                <i class="fas fa-check-double"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
            onClick={handleSubmit}
          >
            {editItem ? "Edit item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}
