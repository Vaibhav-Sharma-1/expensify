import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import "./styles/styles.scss";
// import 'normalize.css/normalize.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetExpenses()).then(() => {
  console.log("fetched");
}).catch((e)=>{
  alert("Error: Fetching Expenses!!")
});

export default App;
