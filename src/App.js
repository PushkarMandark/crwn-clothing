import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Hompage.component";

import { Route, Switch } from "react-router-dom";

const HatsPage = (props) => {
  return <h1>hat page</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/HatsPage" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
