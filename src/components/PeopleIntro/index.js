import React from "react";

/*--------------------- */
import "./style.css";

class PeopleIntro extends React.Component {
  render() {
    return (
      <div className="member-introduction">PeopleIntro{this.props.name}</div>
    );
  }
}

export default PeopleIntro;
