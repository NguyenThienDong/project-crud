import React, {Component} from 'react';

export default class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id)
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
    }

    render() {
        const {index, task} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}
                    >{task.status ? 'Kích hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5" onClick={this.onUpdate}></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={ this.onDeleteItem }>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}