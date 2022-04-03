import React from "react";
import styles from "./Card.module.scss";
const Card = ({ author, title, imgUrl, id, category }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {imgUrl ? (
          <img src={imgUrl} alt="" />
        ) : (
          <div className={styles.noBook}></div>
        )}
        <div className={styles.category}>
          <p>{category}</p>
        </div>
        <div className={styles.title}>
          <h3>{title.substr(0, 60)}</h3>
        </div>
        <div className={styles.author}>
          <p>
            {author &&
              author.slice(0, 3).map((el) => {
                return <p>{el}</p>;
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
