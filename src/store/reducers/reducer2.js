const initilaState = "";

const reducer2 = (state, action) => {
  switch (action.type) {
    case "Reducer2type1":
      return "Reducer2type1"
    default:
      return initilaState
  }
}

export default reducer2