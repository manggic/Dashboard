import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Department from "./components/Department";
function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="body">
          <Switch>
            <Route
              path="/dashboard"
              exact
              component={() => {
                return <Dashboard />;
              }}
            />
            <Route
              path="/department"
              exact
              component={() => {
                return <Department />;
              }}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
