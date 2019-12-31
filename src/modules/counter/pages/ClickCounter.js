import React, { Component } from 'react';
import UpdatedComponent from '../components/UpdatedComponent';

class ClickCounter extends Component {

    render() {
        const {count,incrementCount} = this.props;
        
        return (
            <button type="button" className="btn btn-primary" onClick={incrementCount}>Anmol Click {count} times</button>
        )
    }
}

export default UpdatedComponent(ClickCounter)

