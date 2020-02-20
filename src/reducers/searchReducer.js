import { FETCH_DATA, UPDATE_RESULTS, SET_ERROR } from "../actions/searchActions";

const initialState = {
  results: [],
  isFetchingData: false,
  error: ""
};

export const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        results: []
      };
    case UPDATE_RESULTS:
      return {
        ...state,
        results: action.payload,
        isFetchingData: false,
        error: null
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
