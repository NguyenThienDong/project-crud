import * as types from '../constants/actionTypes';

export const allList = () => {
    return{
        type: types.ALL_LIST
    }
}

export const addTask = (task) => {
    return{
        type: types.ADD_TASK,
        task
    }
}