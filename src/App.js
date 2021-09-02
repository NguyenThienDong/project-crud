import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import { connect } from 'react-redux';
import { editTask, openForm, toggleForm } from './actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            filter: {
                name: 'name',
                status:-1
            },
            sortBy: '',
            sortValue: 1
        }
    }

    onFilter = (filterName , filterStatus) => {
        filterStatus = parseInt(filterStatus)
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }

    onToggleForm = () => {
        var {taskEditting} = this.props;
        if(taskEditting && taskEditting.id !== '') {
            this.props.onOpenForm();
        }else {
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        })
        
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword.toLowerCase()
        })
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }

    render() {
        let { sortBy, sortValue } = this.state;
        let {isDisplayForm} = this.props;
        // if(filter) {
        //     if(filter.name){
        //         tasks = tasks.filter(task => {
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1
        //         })
        //     }
        //     tasks = tasks.filter(task => {
        //         var result = null;
        //         if(filter.status === -1) {
        //             result = task
        //         }else {
        //             result = task.status === (filter.status === 1 ? true : false)
        //         }
        //         return result;
        //     })
        // }

        // if(keyword) {
        //     tasks = tasks.filter(task => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1
        //     })
        // }

        // if(sortBy === 'name') {
        //     tasks.sort((a, b) => {
        //         if(a.name > b.name) return sortValue;
        //         else if(a.name < b.name) return -sortValue;
        //         else return 0;
        //     })
        // }
        // if(sortBy === 'status') {
        //     tasks.sort((a, b) => {
        //         if(a.status > b.status) return -sortValue;
        //         else if(a.status < b.status) return sortValue;
        //         else return 0;
        //     })
        // }

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : 'col-xs-0 col-sm-0 col-md-0 col-lg-0'}>
                        <TaskForm  />
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary mb-10" onClick={this.onToggleForm} >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <TaskControl 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        />
                        <TaskList 
                            onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditting: state.taskEditting,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        onToggleForm: () => dispatch(toggleForm()),
        onOpenForm: () => dispatch(openForm()),
        onClearTask: (task) => dispatch(editTask(task))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(App);