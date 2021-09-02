import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import taskEditting from './taskEditting';
import filterTable from './filterTable';
import search from './search';

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    taskEditting,
    filterTable,
    search
})

export default myReducer;