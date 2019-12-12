import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/index";

const mapStateToProps = state => {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
};

function Post(props) {
  useEffect(() => {
    props.getData();
  }, [props]);

  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps, {getData}) (Post);