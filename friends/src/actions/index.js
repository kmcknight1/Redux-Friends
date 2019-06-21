import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.5/node_modules/redux";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.message });
    });
};

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";
export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get("/friends")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: FETCH_FRIENDS_FAIL, payload: err.message });
    });
};

export const ADD_NEW_FRIEND = "ADD_NEW_FRIEND";
export const ADD_NEW_FRIEND_SUCCESS = "ADD_NEW_FRIEND_SUCCESS";
export const ADD_NEW_FRIEND_FAIL = "ADD_NEW_FRIEND_FAIL";
export const addNewFriend = friend => dispatch => {
  dispatch({ type: ADD_NEW_FRIEND });
  axiosWithAuth()
    .post("/friends", {
      name: friend.name,
      age: friend.age,
      email: friend.email
    })
    .then(res => {
      console.log("ADD FRIEND RES.DATA", res.data);
      dispatch({ type: ADD_NEW_FRIEND_SUCCESS, payload: res.data });
      //   dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })

    .catch(err => {
      console.log(err);
    });
};

export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAIL = "DELETE_FRIEND_FAIL";
export const deleteFriend = friend => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axiosWithAuth()
    .delete(`/friends/${friend.id}`)
    .then(res => {
      console.log("DELETE FRIEND RES.DATA", res.data);
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
