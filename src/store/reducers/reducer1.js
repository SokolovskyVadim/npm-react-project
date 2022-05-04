const initilaState = "";

const reducer1 = (state, action) => {
  switch (action.type) {
    case "Reducer1type1":
      return "Reducer1type1"
    default:
      return initilaState
  }
}

export default reducer1