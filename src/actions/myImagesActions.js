export const ADD_IMAGE = 'ADD_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';


export const addImage = (id) => dispatch => {
dispatch({ type: ADD_IMAGE, payload: id })
}


export const removeImage = (id) => dispatch => {
    dispatch({ type: REMOVE_IMAGE, payload: id })
    }