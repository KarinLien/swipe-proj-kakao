import React from "react";

/*------------- */
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import "./style.css";

class Product extends React.Component {
  state = {
    pro: []
  };
  async componentDidMount() {
    const port = "2999";
    const response = await fetch(`http://127.0.0.1:${port}/api/product/`);
    const data = await response.json();
    this.setState({
      pro: data
    });
  }
  render() {
    const { pro } = this.state;
    return (
      <Layout>
        <div className="float-right">
          <Filter />
        </div>
        <div className="pdt-big-box">
          {pro.length !== 0 ? (
            pro.map(item => (
              <div className="pdt-box" key={item.name}>
                <div className="pdt-img-box">
                  <img
                    src={require(`../../assets/pro/${item.productImg}`)}
                    alt={item.name}
                  />
                </div>
                <div className="pdt-content">
                  <p>{item.name}</p>
                  <p>
                    {item.pdtSpecialPrice === item.pdtPrice ? (
                      <span className="style-nospecialprice">
                        {item.pdtPrice}
                      </span>
                    ) : (
                      <>
                        <span className="margin-5 special-price-style ">
                          {item.pdtSpecialPrice}
                        </span>
                        <span className="special-price-true margin-5 price-style">
                          {item.pdtPrice}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>no product</div>
          )}
        </div>
      </Layout>
    );
  }
}
export default Product;
