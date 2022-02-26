import axios from "axios";

export const setBooks = (url) => async (dispatch) => {
  try {
    const data = await axios.get(url);
    dispatch({ type: "SET_BOOKS", payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
