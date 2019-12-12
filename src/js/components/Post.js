import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getData } from "../actions/index";

export function Post(props) {

  useEffect(() => {
    props.getData();
  },[props]);
  
  return (
    <div>
      
    </div>
  )
}

export default connect(null, { getData })(Post);