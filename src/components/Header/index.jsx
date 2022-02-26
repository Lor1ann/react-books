import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { setBooks } from "../../redux/actions/books";
import { useDispatch } from "react-redux";
const Header = () => {
  const inputEl = React.useRef();
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState(null);
  React.useEffect(() => {
    function getBooksByManipulations(category, searchValue) {
      dispatch(
        setBooks(
          `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${category}&maxResults=30&key=AIzaSyCfigGHHJwwmd_zY1gpxQ5_ESAonXqiznM`
        )
      );
    }
    getBooksByManipulations(category, searchValue);
  }, [dispatch, category, searchValue]);

  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerTitle}>
          <h1>Искать книги</h1>
        </div>
        <div className={styles.headerSearchInput}>
          <input
            ref={inputEl}
            type="search"
            placeholder="Искать книгу..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setSearchValue(e.target.value);
              }
            }}
          />
        </div>
        <div className={styles.headerFilter}>
          <div className={styles.filterBySort}>
            <p>Сортировать по:</p>
            <select>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
          <div className={styles.filterByCategoties}>
            <p>Категории:</p>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="">all</option>
              <option value="+subject:art">art</option>
              <option value="+subject:biography">biography</option>
              <option value="+subject:computers">computers</option>
              <option value="+subject:history">history</option>
              <option value="+subject:medical">medical</option>
              <option value="+subject:poetry">poetry</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
