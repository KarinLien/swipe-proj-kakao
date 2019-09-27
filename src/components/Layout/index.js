import React from "react";
/*-------------- */
import Header from "../Header";
import Footer from "../Footer";
import "./style.css";

class Layout extends React.Component {
  goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <>
        <Header />
        <div className="Layout-style">{this.props.children}</div>
        <div className="top-btn" onClick={this.goToTop}>
          TOP
        </div>
        <Footer />
      </>
    );
  }
}
export default Layout;
