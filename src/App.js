import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import { connect } from 'react-redux';
import { editTask, openForm, toggleForm } from './actions/index';

class App extends Component {
    
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

    render() {
        let {isDisplayForm} = this.props;

        return (
            <Router>
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
                            <TaskControl />
                            <TaskList />
                        </div>
                    </div>
                </div>
            </Router>
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