import randomString from 'randomstring';
import { SAVE_TASK, ALL_LIST, DELETE_TASK, UPDATE_STATUS } from "../constants/actionTypes";
import {findIndex} from 'lodash';

let data = JSON.parse(localStorage.getItem('tasks'))
let initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    var index = findIndex(state, function(task){
        return task.id === action.id
    })

    switch(action.type) {
        case ALL_LIST:
            return state;
        case SAVE_TASK:
            let task = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true : false
            }
            if(!task.id) {
                task.id = randomString.generate();
                state.push(task);
            }else {
                index = findIndex(state, function(task) {
                    return task.id === action.task.id
                })
                console.log(index);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case UPDATE_STATUS:
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        case DELETE_TASK:
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default myReducer;