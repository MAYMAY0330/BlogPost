import React, { useState, useEffect } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn = false, userName = '' }) => {
  const [name, setName] = useState(userName);
  const [text, setText] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      setName(userName);
    }
  }, [isLoggedIn, userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    if (!trimmedText || (!isLoggedIn && !trimmedName)) return;
    onSubmit({
      name: isLoggedIn ? userName : trimmedName,
      text: trimmedText,
      date: new Date().toISOString(),
    });
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="comment-name">Name</label>
        <input
          id="comment-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoggedIn}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="comment-text">Comment</label>
        <textarea
          id="comment-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
