import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><span className="first-title">Predant</span> <span className="second-title">Dental</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/dentists">Dentists</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                        {user && <span>{user.displayName} </span>}
                        {user.email ?
                            <button onClick={logOut} className="btn btn-primary">Logout</button> :
                            <div><Link to="/login"><button className="btn btn-primary me-2">Login</button></Link>
                                <Link to="/register"><button className="btn btn-primary">Register</button></Link></div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;