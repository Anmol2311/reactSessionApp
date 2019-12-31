import React from 'react';
// import PropTypes from "prop-types";

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
                <a href={'/edit/' + id} >Edit</a>&nbsp;|&nbsp;<a href="/emplist" onClick={() => props.deleteHandler(id)}>Delete</a>
            </td>
        </tr>
    )
}

// Employee.prototypes = {
//     id: PropTypes.number,
//     uname: PropTypes.string,
//     gender: PropTypes.string,
//     city: PropTypes.string,
//     deleteHandler: PropTypes.func
// }

export default Employee;
