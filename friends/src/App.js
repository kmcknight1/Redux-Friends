import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to Friends!</h1>
        </header>
        <div className="login-signup">
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends List</Link>
        </div>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
