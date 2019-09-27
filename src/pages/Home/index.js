import React, { createClass } from "react";

import Layout from "../../components/Layout";
import "./style.css";
import PeopleIntro from "../../components/PeopleIntro";
/*----------- */

// import Ryan from "../../assets/home/people/Ryan.png";
// import Apeach from "../../assets/home/people/Apeach.png";
// import Tube from "../../assets/home/people/Tube.png";
// import Muzi from "../../assets/home/people/Muzi.png";
// import Frodo from "../../assets/home/people/Frodo.png";
// import Neo from "../../assets/home/people/Neo.png";
// import Con from "../../assets/home/people/C.png";
// import Jay from "../../assets/home/people/Jay-G.png";

class Home extends React.Component {
  state = { index: 0 };
  handleShow(i) {
    this.setState({ index: i });
    this.refs[i].scrollIntoView({ behavior: "smooth" });
  }
  render() {
    const members = [
      { name: "Ryan" },
      { name: "Apeach" },
      { name: "Tube" },
      { name: "Muzi" },
      { name: "Frodo" },
      { name: "Neo" },
      { name: "C" },
      { name: "Jay-G" }
    ];
    return (
      <Layout>
        <div className="people-div">
          {members.map((member, index) => (
            <div
              className="member"
              onClick={this.handleShow.bind(this, index)}
              key={index}
            >
              <img
                src={require(`../../assets/home/people/${member.name}.png`)}
                alt={member.name}
              />
            </div>
          ))}
        </div>
        {members.map((member, index) => (
          <div ref={index} key={index} className="member-introduction">
            <PeopleIntro name={member.name} />
          </div>
        ))}
      </Layout>
    );
  }
}

export default Home;
