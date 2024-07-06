/* eslint-disable no-undef */
import axios from "axios";
import {
  POST_DATA_FAIL,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "../Actiontype";

export const postdatafun = (data) => (dispatch) => {
  dispatch({ type: POST_DATA_REQUEST, payload: true });
  axios
    .post("http://localhost:8080/product", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_DATA_REQUEST, payload: false });
      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_DATA_REQUEST, payload: false });
      dispatch({ type: POST_DATA_FAIL, payload: true });
      console.log(err);
    });
};
