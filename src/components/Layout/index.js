import React from "react";
/*-------------- */
import Header from "../Header";
import Footer from "../Footer";
import "./style.css";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="Layout-style">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}
export default Layout;
