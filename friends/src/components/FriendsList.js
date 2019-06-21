import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { getFriends } from "../actions";

import Friend from "./Friend";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <div className="title">
          <h2>My Friends</h2>
          <button onClick={this.logout}>Log Out</button>
        </div>
        <div>
          {this.props.friends.map((friend, index) => (
            <Friend friend={friend} key={index} index={index} />
          ))}
        </div>
        <Link
          to="/addnewfriend"
          style={{
            textDecoration: "none",
            border: "1px solid grey",
            borderRadius: "5px",
            color: "blue",
            fontWeight: "bold",
            padding: "0.2rem 0.5rem 0.2rem 0.5rem",
            backgroundColor: "lightgrey"
          }}
        >
          Add New Friend
        </Link>
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
