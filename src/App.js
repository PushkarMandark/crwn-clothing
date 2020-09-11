import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Hompage.component";
import ShopPage from "./pages/shop/ShopPage";

import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header-component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
