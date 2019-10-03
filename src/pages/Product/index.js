import React from "react";

/*------------- */
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import "./style.css";
/*------------- */
import { fetchProduct } from "../../store/actions";
import { connect } from "react-redux";

class Product extends React.Component {

  componentDidMount() {
    this.props.fetchProduct();
  }
  render() {
    const { ProductData } = this.props;
    return (
      <Layout>
        <div className="float-right">
          <Filter />
        </div>
        <div className="pdt-big-box">
          {ProductData.length !== 0 ? (
            ProductData.map(item => (
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

const mapStateToProps = state => {
  return {
    ProductData: state.Product.ProductList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
