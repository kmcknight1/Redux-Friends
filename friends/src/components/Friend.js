import React, { Component } from "react";
import { connect } from "react-redux";

class Friend extends Component {
  render() {
    return (
      <div className="friend">
        <h2>Friend</h2>
      </div>
    );
  }
}

export default connect()(Friend);
