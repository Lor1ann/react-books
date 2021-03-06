import { createStore, applyMiddleware } from "redux";
import bookReducer from "../reducers/books";
import thunk from "redux-thunk";

const store = createStore(bookReducer, applyMiddleware(thunk));

export default store;
