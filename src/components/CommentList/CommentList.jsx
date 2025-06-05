import React from 'react';
import Comment from '../Comment/Comment';
import styles from './CommentList.module.css';

const CommentList = ({ comments = [] }) => {
  return (
    <div className={styles.commentList} aria-live="polite">
      {comments.map((c, index) => (
        <Comment key={index} {...c} />
      ))}
    </div>
  );
};

export default CommentList;
