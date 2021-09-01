import randomString from 'randomstring';
import { ADD_TASK, ALL_LIST, DELETE_TASK, UPDATE_STATUS } from "../constants/actionTypes";
import {findIndex} from 'lodash';

let data = JSON.parse(localStorage.getItem('tasks'))
let initialState = data ? data : [];

const taskReducer = (state = initialState, action) => {
    var index = findIndex(state, function(task){
        return task.id === action.id
    })

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

export default taskReducer;