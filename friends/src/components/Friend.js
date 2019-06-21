import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteFriend } from "../actions";

class Friend extends Component {
  deleteFriend = e => {
    e.preventDefault();
    this.props.deleteFriend(this.props.friend);
  };

  render() {
    return (
      <div className="friend">
        <h2>{this.props.friend.name}</h2>
        <h4>Age: {this.props.friend.age}</h4>
        <h4>Email: {this.props.friend.email}</h4>
        <button onClick={this.deleteFriend}>Delete Friend</button>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteFriend }
)(Friend);
