/*
* Payment Calculator Page
*/

import React, { PropTypes } from 'react';

const LinkList = (props) => {
  const { data: {TopTitle, icon, displayName, imageSelected, price} } = props;

  return(
    <li>
        <h1>{TopTitle}</h1>
        <h2>{icon}</h2>
        <h5>{displayName}</h5>
        <img src={imageSelected} alt="Selected Image" />
        <h4>{price}</h4>
    </li>
  )
}

LinkList.propTypes = {
  data: PropTypes.shape({})
}

export default LinkList;
