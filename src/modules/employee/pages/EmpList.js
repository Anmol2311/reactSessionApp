import React, { Component } from 'react';
import axios from 'axios';
import * as _ from '../../../shared/constants';
import Employee from '../components/Employee';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class EmpList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }


    render() {
        const { employees } = this.state;
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h5>Employee Dashboard</h5>
                    <Link to="/add" className="btn btn-outline-primary btn-sm mb-3">Create</Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.length ? employees.map((emp, index) => {
                                return (
                                    <Employee key={index} emp={emp} deleteHandler={this.deleteEmployee} />
                                )
                            }) :
                                <tr>
                                    <td colSpan="4">Empty</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    // fetch all data
    getEmployees() {
        axios.get(_.baseURL).then(
            // res => this.setState({
            //     employees: res.data
            // })
            res => {
                let data = [];
                data = res.data || {};
                const isArray = Array.isArray(data); 
                isArray && this.setState({
                    employees:data
                });
            }
        )
    }

    // delete data by id
    deleteEmployee(id) {
        if (window.confirm('Are you sure to delete this employee ?')) {
            const url = `${_.baseURL}/${id}`;
            axios.delete(url).then(
                () => {
                    this.getEmployees();
                }
            )
        }
    }

    // on init of component
    componentDidMount() {
        this.getEmployees();
    }
}

EmpList.propTypes = {
    getEmployees: PropTypes.func
  };
export default EmpList
