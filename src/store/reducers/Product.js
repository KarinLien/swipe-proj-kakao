const initState = {
  ProductList: []
};
const ProductData = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        ...state,
        ProductList: action.value
      };
    default:
      return state;
  }
};

export default ProductData;
