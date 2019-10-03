const initState = {
  Click: false
};
const ForApp = (state = initState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        Click: !state.AppClick
      };
    default:
      return state;
  }
};

export default ForApp;
