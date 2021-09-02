import { SORT } from "../constants/actionTypes";

var initialState = {
    by : '',
    value : 1
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case SORT:
            action.sort = {
                by: action.sort.by,
                value: action.sort.value
            }
            return action.sort;
        default:
            return state;
    }
}

export default myReducer;