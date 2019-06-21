import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends } from "../actions";

import Friend from "./Friend";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>My Friends</h1>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ error, friends, fetchingFriends }) => ({
  error,
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends }
  )(FriendsList)
);
