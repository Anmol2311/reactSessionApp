import React, { Component } from 'react';
import * as _ from '../../../shared/constants';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class AddEmp extends Component {

    title = _.addFormTitle;
    constructor(props) {
        super(props)

        this.state = {
            uname: '',
            gender: '',
            city: '',
            terms: false
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4 container">
                    <h4 className="text-center">{this.title}</h4>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="font-weight-bold">Name:</label>
                            <input type="text" className="form-control" name="uname" placeholder="Enter Name" onChange={this.changeHandler} value={this.state.uname} />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Gender:</label>
                            <input type="radio" className="ml-3" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.changeHandler} />Male
                            <input type="radio" className="ml-3" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.changeHandler} />Female
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">City:</label>
                            <select className="form-control" name="city" value={this.state.city} onChange={this.changeHandler}>
                                <option value="" disabled>Select any one</option>
                                {
                                    _.cities.map((city, id) => {
                                        return (
                                            <option key={id} value={city}>{city}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox" name="terms" checked={this.state.terms} onChange={this.changeHandler} /> I agree all terms &amp; terms
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary btn-sm">Submit</button>&nbsp;
                            <Link to="/empList" className="btn btn-outline-primary btn-sm btn-link">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    // set each input value inside state
    changeHandler(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    // submit form
    onSubmit(e) {
        e.preventDefault();
        const employee = { ...this.state }
        axios.post(_.baseURL, employee).then(
            () => {
                window.alert('Added Successfully!');
                this.props.history.push('/empList');
            }
        )
    }

}

export default AddEmp
