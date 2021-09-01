import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateStatus } from '../actions';

class TaskItem extends Component {

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
    }

    render() {
        const {index, task, onUpdateStatus, onDeleteItem} = this.props;
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
                    <button type="button" className="btn btn-warning"onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5" onClick={this.onUpdate}></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={ () => onDeleteItem(task.id) }>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        onUpdateStatus: (id) => dispatch(updateStatus(id)),
        onDeleteItem: (id) => dispatch(deleteTask(id))
    }
}

export default connect(null, mapActionsToProps)(TaskItem)