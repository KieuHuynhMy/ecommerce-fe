import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth';

const IsActive = (path) => {
    const location = useLocation();
    if (location.pathname === path) {
        return { color: "#ff9900" }
    } else {
        return { color: "#ffffff" }
    }
}

const Menu = () => {
    const history = useHistory();
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-item">
                    <Link style={IsActive('/')} to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={IsActive('/user/dashboard')}
                            to="/user/dashboard" >
                            Dashboard
                        </Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={IsActive('/admin/dashboard')}
                            to="/admin/dashboard" >
                            Dashboard
                        </Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link style={IsActive('/signup')} to="/signup" className="nav-link">
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={IsActive('/signin')} to="/signin" className="nav-link">
                                Signin
                            </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer', color: '#ffffff' }}
                            onClick={() => signout(() => {
                                history.push('/')
                            })}
                        >
                            Signout
                        </span>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Menu;