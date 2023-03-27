import { combineReducers } from "redux";
import authorsReducer from "./authors/authorSlice";
import booksReducer from "./books/booksSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;