import { ADD_TASK, ALL_LIST, CLOSE_FORM, OPEN_FORM, TOGGLE_FORM } from "../constants/actionTypes"

export const allList = () => {
    return{
        type: ALL_LIST
    }
}

export const addTask = (task) => {
    return{
        type: ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return{
        type: TOGGLE_FORM
    }
}

export const closeForm = () => {
    return{
        type: CLOSE_FORM
    }
}

export const openForm = () => {
    return{
        type: OPEN_FORM
    }
}