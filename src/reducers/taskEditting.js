import { EDIT_TASK } from "../constants/actionTypes";

var initialState = {
    id : '',
    name : '',
    status : false
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_TASK:
            return action.task;
        default:
            return state;
    }
}

export default myReducer;