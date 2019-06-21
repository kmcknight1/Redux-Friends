import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAIL
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
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
    default:
      return state;
  }
};

export default reducer;
