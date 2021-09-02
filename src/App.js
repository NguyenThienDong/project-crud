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
            sortBy: '',
            sortValue: 1
        }
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

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }

    render() {
        let { sortBy, sortValue } = this.state;
        let {isDisplayForm} = this.props;

        

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
                        <TaskList />
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