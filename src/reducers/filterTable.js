import { FILTER_TABLE } from "../constants/actionTypes";

var initialState = {
    name : '',
    status : -1
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILTER_TABLE:
            action.filter = {
                name: action.filter.name,
                status: parseInt(action.filter.status)
            }
            return action.filter;
        default:
            return state;
    }
}

export default myReducer;