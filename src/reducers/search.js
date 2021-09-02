import { SEARCH } from "../constants/actionTypes";

var initialState = '';

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            console.log(action);
            return action.keyword;
        default:
            return state;
    }
}

export default myReducer;