// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  }
}

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  };
}

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id,
  }
}

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id,
  }
}

const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];

      case "quotes/remove":
        return state.filter((quote) => quote.id !== action.payload);
     
        case "quotes/upvote":
          return state.filter((quote) => quote.id !== action.payload)

          case "quotes/downvote":
            return state.filter((quote) => quote.id !== action.payload)

        default:
        return state;
  }
  
}
