import React, { Component } from 'react';
import UpdatedComponent from '../components/UpdatedComponent';

class HoverCounter extends Component {

    render() {
        const { count, incrementCount } = this.props;
    
        return (
            <h3 onMouseOver={incrementCount}>Anmol hover {count} times</h3>
        )
    }

}

export default UpdatedComponent(HoverCounter)
