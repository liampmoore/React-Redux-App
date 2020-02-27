import {ADD_IMAGE, REMOVE_IMAGE} from "../actions/myImagesActions";

const initialState = {
  images: []
};

export const myImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE: {
        if (state.images.filter((image) => image.id === action.payload.id).length > 0) {
          return {
            ...state
          }
        }
        else return {
            ...state,
            images: [{...action.payload}, ...state.images]
        } };
        case REMOVE_IMAGE: 
        return {
            ...state,
            images: state.images.filter((item) => {return item.id !== action.payload})
        };
    default:
      return state;
  }
};
