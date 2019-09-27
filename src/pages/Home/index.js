import React from "react";

import Layout from "../../components/Layout";
import "./style.css";
/*----------- */

import Ryan from "../../assets/home/people/Ryan.png";
import Apeach from "../../assets/home/people/Apeach.png";
import Tube from "../../assets/home/people/Tube.png";
import Muzi from "../../assets/home/people/Muzi.png";
import Frodo from "../../assets/home/people/Frodo.png";
import Neo from "../../assets/home/people/Neo.png";
import Con from "../../assets/home/people/C.png";
import Jay from "../../assets/home/people/Jay-G.png";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div>HOME</div>
        <div className="people-div">
          <div className="member">
            <img src={Ryan} alt="ryan" />
          </div>
          <div className="member">
            <img src={Apeach} alt="Apeach" />
          </div>
          <div className="member">
            <img src={Tube} alt="Tube" />
          </div>
          <div className="member">
            <img src={Muzi} alt="Muzi" />
          </div>
          <div className="member">
            <img src={Frodo} alt="Frodo" />
          </div>
          <div className="member">
            <img src={Neo} alt="Neo" />
          </div>
          <div className="member">
            <img src={Con} alt="Con" />
          </div>
          <div className="member">
            <img src={Jay} alt="Jay" />
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;
