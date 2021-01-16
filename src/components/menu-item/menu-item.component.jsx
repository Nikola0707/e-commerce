import React from "react";
import { withRouter } from 'react-router-dom';

import "./menu-item-styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
// title, imageUrl, size and linkUrl is coming from directory.component.jsx 
// history is coming from export default withRouter(MenuItem);
  return (
    <div
      //   if props size == large add className large and className menu-item, else only className menu-item
      className={`${size} menu-item`}
      onClick= {() => history.push(`${match.url}${linkUrl}`)}   
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
