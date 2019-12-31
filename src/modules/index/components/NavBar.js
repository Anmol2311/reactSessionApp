import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to="/emplist" className="btn btn-outline-primary btn-sm">CRUD</Link>&nbsp;&nbsp;
            <Link to="/counter" className="btn btn-outline-primary btn-sm">HOC</Link>&nbsp;&nbsp;
            <Link to="/count" className="btn btn-outline-primary btn-sm">Hooks</Link>&nbsp;&nbsp;
        </div>
    )
}

export default NavBar
