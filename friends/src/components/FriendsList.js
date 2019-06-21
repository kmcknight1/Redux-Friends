import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link } from "react-router-dom";

import { getFriends } from "../actions";

import Friend from "./Friend";
import AddFriend from "./AddFriend";

class FriendsList extends Component {
  // state = {
  //   newFriend: ''
  // };

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>My Friends</h1>
        </div>
        <div>
          {this.props.friends.map((friend, index) => (
            <Friend friend={friend} key={index} index={index} />
          ))}
        </div>
        <Link to="/addnewfriend">Add New Friend</Link>
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
