import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Hompage.component";
import ShopPage from "./pages/shop/ShopPage";

import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header-component";
import SigninAndSignup from "./pages/signin-and-signup/SigninAndSignup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
