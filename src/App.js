import './App.css';
import Cohorts from "./components/Cohorts/Cohorts.js"
import Students from "./components/Students/Students.js"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/cohorts">Cohorts</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/cohorts">
              <Cohorts />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
