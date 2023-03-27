import { v4 as uuid } from "uuid";

export const addAuthor = (author) => {
  return {
    type: "authors/add",
    payload: author,
  };
};

export const removeAuthor = (id) => {
  return {
    type: "authors/remove",
    payload: id,
  };
};

const initialState = [];

export default function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case "authors/add":
      // return {
      //   ...state,
      //   authors: [...state.authors, action.payload],
      // };
      return [...state, action.payload];

    case "authors/remove":
      // const newAuthors = state.authors.filter(
      //   (author) => author.id !== action.payload
      // );
      // return {
      //   ...state,
      //   authors: newAuthors,
      // };
      return state.filter((author) => author.id !== action.payload);

    case "books/add":
      const existingAuthor = state.find(
        (author) => author.authorName === action.payload.authorName
      );
      if (existingAuthor) {
        return state;
      } else {
        return [
          ...state,
          { authorName: action.payload.authorName, id: uuid() },
        ];
      }

    default:
      return state;
  }
}