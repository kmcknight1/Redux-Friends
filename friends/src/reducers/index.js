import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAIL,
  ADD_NEW_FRIEND,
  ADD_NEW_FRIEND_SUCCESS,
  ADD_NEW_FRIEND_FAIL,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAIL
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  addingFriend: false,
  deletingFriend: false,
  loggingIn: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loggingIn: false
      };
    case FETCH_FRIENDS_START:
      return {
        ...state,
        error: "",
        fetchingFriends: true,
        friends: []
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAIL:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload,
        friends: []
      };
    case ADD_NEW_FRIEND:
      return {
        ...state,
        addingFriend: true,
        error: ""
      };
    case ADD_NEW_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [action.payload],
        addingFriend: false,
        error: ""
      };
    case ADD_NEW_FRIEND_FAIL:
      return {
        ...state,
        addingFriend: false,
        error: action.payload
      };
    case DELETE_FRIEND:
      return {
        ...state,
        deletingFriend: true,
        error: ""
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        friends: action.payload,
        error: ""
      };
    case DELETE_FRIEND_FAIL:
      return {
        ...state,
        deletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
