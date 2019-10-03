import React from "react";

import Layout from "../../components/Layout";
import "./style.css";
import PeopleIntro from "../../components/PeopleIntro";

/*---------------- */
import { ClickApp } from "../../store/actions";
import { connect } from "react-redux";
/*----------- */
class Home extends React.Component {
  state = { index: 0 };
  handleShow(i) {
    this.setState({ index: i });
    this.refs[i].scrollIntoView({ behavior: "smooth" });
  }
  ClickApp = () => {
    this.props.ClickApp();
  };
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
        <button onClick={this.ClickApp}>SUBMIT</button>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    click: state.ForApp.AppClick
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ClickApp: () => {
      dispatch(ClickApp());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
