import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    
    componentDidMount() {
        if(this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }

    // static getDerivedStateFromProps(nextProps) {
    //     if(nextProps && nextProps.task !== null){
    //         return {
    //             id: nextProps.task.id,
    //             name: nextProps.task.name,
    //             status: nextProps.task.status
    //         }
    //     }
    // }

    componentDidUpdate(prevProps, preState) {
        if(prevProps.task !== this.props.task) {
            this.setState({
                id: ''
            })
        }
    }

    onChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        if(name === 'status') {
            value = target.value === 'false' ? false : true
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTask(this.state);
        this.onClear();
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }

    render() {
        const { name, status, id } = this.state;
        const {onCloseForm} = this.props;

        return (
            <div className="panel panel-lg panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                    <span className="fa fa-times-circle text-right" onClick={() => onCloseForm()}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái: </label>
                            <select 
                                className="form-control"
                                name='status'
                                value={status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            
                        </div>
                        <div className='text-center'>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                <span className="fa fa-plus mr-5"></span> Lưu lại
                            </button> &nbsp;
                            <button 
                                type="submit" 
                                className="btn btn-danger"
                                onClick={this.onClear}
                            ><span className="fa fa-close mr-5"></span> Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapActionsToProps = (dispatch) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TaskForm)