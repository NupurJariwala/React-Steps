import {
  POST_DATA_FAIL,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "../Actiontype";

const initialstate = {
  isLoading: false,
  isError: false,
  data: [],
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case POST_DATA_REQUEST:
      return { ...state, isLoading: payload };
    case POST_DATA_SUCCESS:
      return { ...state, data: payload };
    case POST_DATA_FAIL:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
