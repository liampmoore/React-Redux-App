import { combineReducers } from "redux"

import {myImagesReducer} from './myImagesReducer';
import {searchReducer} from './searchReducer';

export default combineReducers({
    myImagesReducer,
    searchReducer
  });