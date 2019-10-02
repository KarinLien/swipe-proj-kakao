import React from "react";

/**------- */
import "./style.css";
import down from "../../assets/common/dropdown_down.png";
import up from "../../assets/common/dropdown_up.png";

class Filter extends React.Component {
  state = {
    AllCharacters: false,
    Newarrivals: false
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
  render() {
    const { Newarrivals, AllCharacters } = this.state;
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
            <div className="filter-select-cont-AllCharacters">BOX</div>
          </div>
        ) : (
          ""
        )}
        {Newarrivals ? (
          <div className="filter-select-box-Newarrivals">
            <ul className="filter-select-cont-Newarrivals">
              <li>BOX1</li>
              <li>BOX2</li>
              <li>BOX3</li>
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
