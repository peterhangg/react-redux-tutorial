import { ADD_ARTICLE } from "../constants/action-types";
import axios from "axios";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
};

export function getData() {
  return function(dispatch) {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        dispatch({ type: "DATA_LOADED", payload: res.data });
      });
  };
};

