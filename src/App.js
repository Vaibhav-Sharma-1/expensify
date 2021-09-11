import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
// import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount: 800 }));
store.dispatch(addExpense({ description: "gas bill", amount: 612, createdAt:1000 }));
store.dispatch(addExpense({ description: "rent", amount: 15000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
