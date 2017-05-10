/*
* Payment Calculator Page
*/

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const AnchorLink = (props) => {
  const { href, name, onClick, id, activeTab } = props;

  return(
    <a href={href} onClick={onClick} className={classnames("linkText", `${activeTab}`)} data-id={id}>{name}</a>
  )
}

AnchorLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string
}

export default AnchorLink;
