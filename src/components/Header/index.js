import React from "react";
import "./style.css";

import SearchBtn from "../../assets/common/icons8-search-50.png";
import Logo from "../../assets/common/image.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="attu-div">
          <Link to="/login" className="attu-link">
            LOGIN
          </Link>
          <Link to="/registered" className="attu-link">
            REGISTERED
          </Link>
          <Link to="/product" className="attu-link">
            PRODUCT
          </Link>
          <Link to="/about" className="attu-link">
            ABOUT
          </Link>
        </div>

        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="search-bar form-group">
          <div className="inner-div">
            <input placeholder="Search" id="search" type="text" />
            <button className="btn btn-default">
              <img src={SearchBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
