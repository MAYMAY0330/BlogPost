import React from 'react';
import styles from './Comment.module.css';

const Comment = ({ name, date, text, avatar }) => {
  const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={styles.comment}>
      {avatar && (
        <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      )}
      <div className={styles.body}>
        <p className={styles.meta}>
          <span className={styles.name}>{name}</span>
          <span className={styles.date}>{formattedDate}</span>
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
