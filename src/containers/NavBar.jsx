import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";

const NavBar = ({ auth, logout }) => {
  console.log(auth);
  return (
    <div className='navbar'>
      <div className='container'>
        <ul className='navbar-container'>
          <li>
            <Link className='navbar-item' to='/'>
              Home
            </Link>
          </li>

          {/* <li>
            <Link className="navbar-item" to='/'>
              All Polls
            </Link>
          </li> */}
          {!auth.isAuthenticated && (
            <Fragment>
              <li>
                <Link className='navbar-item' to='/register'>
                  Register
                </Link>
              </li>
              <li>
                <Link className='navbar-item login' to='/login'>
                  Login
                </Link>
              </li>
            </Fragment>
          )}
          {auth.isAuthenticated && (
            <Fragment>
              <li>
                <Link className='navbar-item' to='/poll/new'>
                  Create Poll
                </Link>
              </li>
              <li>
                <a className='navbar-item logout' onClick={logout}>
                  Logout
                </a>
              </li>
            </Fragment>
          )}
        </ul>
        {auth.isAuthenticated && (
          <p className='navbar-user'>
            Logged in as "<span>{auth.user.username}</span>"✅
          </p>
        )}
        {/* {auth.isAuthenticated && (
          <p>
            Total polls count: <span>{}</span>
          </p>
        )} */}
      </div>
    </div>
  );
};

export default connect((store) => ({ auth: store.auth }), { logout })(NavBar);
