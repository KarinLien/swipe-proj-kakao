import React from "react";

/**------- */
import "./style.css";
import down from "../../assets/common/dropdown_down.png";
import up from "../../assets/common/dropdown_up.png";
import selectTrue from "../../assets/common/category_icn-done.png";
/**------------- */

const selectData = [
  {
    name: "전체",
    engName: "All",
    img: "category_group_off.png",
    imgName: "group"
  },
  {
    name: "라이언",
    engName: "Ryan",
    img: "category_rion_off.png",
    imgName: "rion"
  },
  {
    name: "어피치",
    engName: "Apeach",
    img: "category_apeach_off.png",
    imgName: "apeach"
  },
  {
    name: "무지",
    engName: "Muzi",
    img: "category_muzi_off.png",
    imgName: "muzi"
  },
  {
    name: "프로도",
    engName: "Frodo",
    img: "category_frodo_off.png",
    imgName: "frodo"
  },
  { name: "네오", engName: "Neo", img: "category_neo_off.png", imgName: "neo" },
  {
    name: "튜브",
    engName: "Tube",
    img: "category_tube_off.png",
    imgName: "tube"
  },
  {
    name: "제이지",
    engName: "Jay-G",
    img: "category_jayz_off.png",
    imgName: "jayz"
  },
  { name: "콘", engName: "Con", img: "category_con_off.png", imgName: "con" }
];

class Filter extends React.Component {
  state = {
    AllCharacters: false,
    Newarrivals: false,
    Characters: 0,
    hoverNumber: 0
  };
  clickAllCharacters = () => {
    this.setState({
      AllCharacters: !this.state.AllCharacters,
      Newarrivals: false
    });
  };
  clickNewArrivals = () => {
    this.setState({
      AllCharacters: false,
      Newarrivals: !this.state.Newarrivals
    });
  };
  chooseCharacters = index => {
    this.setState({
      Characters: index
    });
  };
  mouseEvent = index => {
    this.setState({
      hoverNumber: index
    });
  };
  render() {
    const { Newarrivals, AllCharacters, Characters, hoverNumber } = this.state;
    return (
      <div className="filter-big-box">
        <div
          className="filter-box filter-left"
          onClick={this.clickAllCharacters}
        >
          <span>All Characters</span>
          <img src={AllCharacters ? up : down} alt="down" />
        </div>
        <div
          className="filter-box filter-right"
          onClick={this.clickNewArrivals}
        >
          <span>New arrivals</span>
          <img src={Newarrivals ? up : down} alt="down" />
        </div>
        {AllCharacters ? (
          <div className="filter-select-box-AllCharacters">
            <div className="filter-select-cont-AllCharacters">
              {selectData.map((item, index) => (
                <div
                  className="select-cont-box"
                  key={index}
                  onClick={() => this.chooseCharacters(index)}
                  onMouseOver={() => this.mouseEvent(index)}
                  onMouseLeave={() => this.mouseEvent(index)}
                >
                  <div>
                    <span className="select-cont-box-span">
                      <img
                        src={require(`../../assets/filter/category_${
                          item.imgName
                        }_${
                          Characters === index || hoverNumber === index
                            ? "on"
                            : "off"
                        }.png`)}
                        alt="All"
                      />
                    </span>
                    {Characters === index ? (
                      <span className="select-true">
                        <img src={selectTrue} alt="select-true" />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {Newarrivals ? (
          <div className="filter-select-box-Newarrivals">
            <ul className="filter-select-cont-Newarrivals">
              <li>
                <a href="#####">New arrivals</a>
              </li>
              <li>
                <a href="#####">Price low to high</a>
              </li>
              <li>
                <a href="#####">Price high to low</a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Filter;
