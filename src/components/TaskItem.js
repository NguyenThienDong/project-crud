import React, {Component} from 'react';
import { connect } from 'react-redux';
import { closeForm, deleteTask, editTask, openForm, updateStatus } from '../actions/index';

class TaskItem extends Component {

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id);
        this.props.onCloseForm();
    }

    render() {
        const {index, task, onUpdateStatus} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status ? 'label label-danger' : 'label label-success'}
                        onClick={() => onUpdateStatus(task.id)}
                    >{task.status ? 'Kích hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteItem}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        onUpdateStatus: (id) => dispatch(updateStatus(id)),
        onDeleteItem: (id) => dispatch(deleteTask(id)),
        onCloseForm: () => dispatch(closeForm()),
        onOpenForm: () => dispatch(openForm()),
        onEditTask: (task) => dispatch(editTask(task))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TaskItem)