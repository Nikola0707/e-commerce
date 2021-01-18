import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Router>
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to='/shop' className="option">    
          SHOP
        </Link>
        <Link to='/shop' className="option">
          CONTACT
        </Link>
      </div>
    </Router>
  </div>
);

export default Header;