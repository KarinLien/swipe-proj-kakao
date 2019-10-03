import { combineReducers } from "redux";
import ForApp from "./ForApp";
import Product from "./Product";

const App = combineReducers({
  ForApp,
  Product
});

export default App;
