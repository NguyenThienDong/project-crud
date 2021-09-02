import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sortTask } from '../actions';

import {Link} from 'react-router-dom';


class TaskSortControl extends  Component{

    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        const {sort} = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <Link role="button" to='/'
                                className={(sort.by==='name' && sort.value===1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </Link>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <Link role="button" to='/'
                                className={(sort.by==='name' && sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </Link>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <Link role="button" to='/'
                                className={(sort.by==='status' && sort.value===1) ? 'sort_selected' : ''}
                            >
                                Trạng Thái Kích Hoạt
                            </Link>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <Link role="button" to='/'
                                className={(sort.by==='status' && sort.value===-1) ? 'sort_selected' : ''}
                            >
                                Trạng Thái Ẩn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        onSort: (sort) => dispatch(sortTask(sort))
    }
}

export default connect(mapStateToProps , mapActionsToProps)(TaskSortControl)