import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import styles from "./Home.module.scss";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const books = useSelector((state) => state.items);
  const total = useSelector((state) => state.totalItems);

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.total}>
        Найдено книг: <span>{total}</span>
      </div>
      <div className={styles.booksList}>
        {books ? (
          books.map((obj) => {
            return (
              <Link
                key={obj.id}
                to={`/book/${obj.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  author={obj.volumeInfo.authors}
                  title={obj.volumeInfo.title}
                  imgUrl={
                    obj.volumeInfo.imageLinks &&
                    obj.volumeInfo.imageLinks.thumbnail
                  }
                  category={obj.volumeInfo.categories}
                  id={obj.id}
                />
              </Link>
            );
          })
        ) : (
          <div className={styles.skeletonStacks}>
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
            <Skeleton
              variant="rectangular"
              width={250}
              height={400}
              className={styles.skeleton}
            />
          </div>
        )}
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Home;
