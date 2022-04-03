import React from "react";
import styles from "./FullBook.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullBook = () => {
  const param = useParams();
  const [book, setBook] = React.useState(null);
  React.useEffect(() => {
    async function getBook(id) {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook(param.id);
  }, [param.id]);

  return (
    <div className={styles.root}>
      {book ? (
        <div className={styles.book}>
          <div className={styles.bookImg}>
            <img
              src={
                book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.medium
              }
              alt="book"
            />
          </div>
          <div className={styles.bookInfo}>
            <div className={styles.bookCategory}>
              {book.volumeInfo.categories &&
                book.volumeInfo.categories.map((el) => {
                  return <p>{el}</p>;
                })}
            </div>
            <div className={styles.bookTitle}>
              <h2>{book.volumeInfo.title}</h2>
            </div>
            <div className={styles.bookAuthor}>
              {book.volumeInfo.authors &&
                book.volumeInfo.authors.map((el) => {
                  return <p>{el}</p>;
                })}
            </div>
            <div className={styles.bookDescription}>
              {book.volumeInfo.description}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FullBook;
