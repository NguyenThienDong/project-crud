import { ALL_LIST } from "../constants/actionTypes";

let data = JSON.parse(localStorage.getItem('tasks'))
let initialState = data ? data : [];

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_LIST:
            return state;
        default:
            return state;
    }
}

export default taskReducer;