//Ana Carolina - 10771387         |Mariana Fidelis - 10721308

import React from 'react';
import './Card.module.css';

export default function Card({ title, children }) {
  return (
    <div className={styles.cadastrocard}>
      {title && <h2 className={styles.titulo}>{title}</h2>}
      {children}
    </div>
  );
}