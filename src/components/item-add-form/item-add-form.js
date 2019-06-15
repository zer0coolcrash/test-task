import React from "react";

import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.AddItem(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="item-add-form  d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.onSubmit}
        >
          Add Element
        </button>
      </form>
    );
  }
}
