import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to Friends!</h1>
        </header>
        <div className="login-signup">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              margin: "1rem",
              border: "1px solid grey",
              borderRadius: "5px",
              color: "blue",
              fontWeight: "bold",
              padding: "0.2rem 0.5rem 0.2rem 0.5rem",
              backgroundColor: "lightgrey"
            }}
          >
            Login
          </Link>
          <Link
            to="/protected"
            style={{
              textDecoration: "none",
              margin: "1rem",
              border: "1px solid grey",
              borderRadius: "5px",
              color: "blue",
              fontWeight: "bold",
              padding: "0.2rem 0.5rem 0.2rem 0.5rem",
              backgroundColor: "lightgrey"
            }}
          >
            Friends List
          </Link>
        </div>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route exact path="/addnewfriend" component={AddFriend} />
      </div>
    </Router>
  );
}

export default App;
