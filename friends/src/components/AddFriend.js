import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewFriend } from "../actions";

class AddFriend extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();
    this.validateFields();
    // this.props.addNewFriend(this.state);
    // this.setState({ name: "", age: '', email: "" });
    // this.props.history.push("/protected");
  };

  validateFields() {
    let valid = true;

    if (this.state.name.length > 15 || this.state.name.length < 2) {
      valid = false;
    }

    if (/\d/g.test(this.state.age) === false) {
      valid = false;
    }

    if (this.state.email.includes("@") === false) {
      valid = false;
    }

    if (valid) {
      this.props.addNewFriend(this.state);
      this.setState({ name: "", age: "", email: "" });
      this.props.history.push("/protected");
    } else {
      alert("Invalid Field Entry");
    }
  }

  render() {
    return (
      <>
        <h3>Add New Friend</h3>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="Age"
            value={this.state.age}
            name="age"
            onChange={this.handleChanges}
          />
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleChanges}
          />
          <button type="submit">Add Friend</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { addNewFriend }
)(AddFriend);
