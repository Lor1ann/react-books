export default function bookReducer(state = {}, action) {
  if (action.type === "SET_BOOKS") {
    return { ...action.payload };
  }
  return state;
}
