import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';
import * as actions from '../actions/index';

class TaskList extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (e) => {
        var {filterName, filterStatus} = this.state;
        var target = e.target;
        var value = target.value;
        var name = target.name;
        var filter = {
            name: name === 'filterName' ? value : filterName,
            status: name === 'filterStatus' ? value : filterStatus
        }
        this.props.onFilter(filter);

        this.setState({
            [name]: value
        })
    }

    render() {
        let { tasks, filterTable, keyword, sort } = this.props;
        
        if(filterTable.name){
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(filterTable.name) !== -1
            })
        }
        tasks = tasks.filter(task => {
            var result = null;
            if(filterTable.status === -1) {
                result = task
            }else {
                result = task.status === (filterTable.status === 1 ? true : false)
            }
            return result;
        })

        if(keyword) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(keyword) !== -1
            })
        }

        if(sort.by === 'name') {
            tasks.sort((a, b) => {
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            })
        }
        if(sort.by === 'status') {
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sort.value;
                else if(a.status < b.status) return sort.value;
                else return 0;
            })
        }
       
        const { filterName, filterStatus } = this.state;
        const elmTasks = tasks.map((task, index) => (
            <TaskItem 
                key={task.id} 
                index={index} 
                task={task}
            />
        ))
        return(
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        value={filterName}
                                        onChange={this.onChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        value={filterStatus}
                                        onChange={this.onChange}
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { elmTasks }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        onFilter: (filter) => dispatch(actions.filterTable(filter))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TaskList)