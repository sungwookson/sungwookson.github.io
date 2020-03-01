import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigationbar from "./components/layout/Navigationbar"

export default function App() {
  return (
    <Router>
      <div>
        <Navigationbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Project() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}