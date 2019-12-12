import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = (props) => (
  <ul>
    {props.articles.map(article => (
      <li key={article.id}>{article.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;