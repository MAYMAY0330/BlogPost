import React, { useEffect, useRef } from 'react';
import styles from './ConfirmationDialog.module.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
      const handleKey = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title" className={styles.title}>Confirm Deletion</h2>
        <p id="dialog-description" className={styles.description}>
          Are you sure you want to delete this post?
        </p>
        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.cancel}>Cancel</button>
          <button onClick={onConfirm} className={styles.delete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
