import * as types from "../actionTypes";

export const ClickApp = () => {
  return { type: types.CLICK_APP };
};

export const fetchProduct = () => async dispatch => {
  const port = "2999";
  const response = await fetch(`http://127.0.0.1:${port}/api/product/`);
  const data = await response.json();
  dispatch(ProductData(data));
  return data;
};

export const ProductData = value => {
  return { type: types.FETCH_PRODUCT, value };
};

export const filterCharacters = engName => async dispatch => {
  const port = "2999";
  fetch(`http://127.0.0.1:${port}/api/post/product`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify({ name: engName }), // data can be `string` or {object}!
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(json => dispatch(ProductData(json)));
};
