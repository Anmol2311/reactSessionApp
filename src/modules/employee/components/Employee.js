import React from 'react';
import { Link } from 'react-router-dom';

function Employee(props) {

    // capitalize letter logic
    String.prototype.Capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    const { id, uname, gender, city } = props.emp;
    return (
        <tr>
            <td>{id}</td>
            <td>{uname.Capitalize()}</td>
            <td>{gender}</td>
            <td>{city}</td>
            <td>
                <Link to={'/edit/' + id} >Edit</Link>&nbsp;|&nbsp;<Link to="/emplist" onClick={() => props.deleteHandler(id)}>Delete</Link>
            </td>
        </tr>
    )
}

export default Employee;
