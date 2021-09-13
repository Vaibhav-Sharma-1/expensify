import React from "react";
import ReactDOM from "react-dom";
import App, { store } from "./App";
import { firebase } from "./firebase/firebase";
import { history } from "./routers/AppRouter";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "./firebase/firebase";

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("root"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("This ID is from Index.js", user.uid)
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
