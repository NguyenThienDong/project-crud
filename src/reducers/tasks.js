import randomString from 'randomstring';
import { ADD_TASK, ALL_LIST } from "../constants/actionTypes";

let data = JSON.parse(localStorage.getItem('tasks'))
let initialState = data ? data : [];

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_LIST:
            return state;
        case ADD_TASK:
            console.log(action);
            let newTask = {
                id: randomString.generate(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default taskReducer;