import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FullBook from "./pages/FullBook";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "./redux/actions/books";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      setBooks(
        "https://www.googleapis.com/books/v1/volumes?q=Java&maxResults=30&key=AIzaSyCfigGHHJwwmd_zY1gpxQ5_ESAonXqiznM"
      )
    );
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<FullBook />} />
      </Routes>
    </div>
  );
}

export default App;
