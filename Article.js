// Article.js
import React from 'react';
import './Article.css';

const Article = ({ title, text }) => {
  return (
    <article className="article">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Article;