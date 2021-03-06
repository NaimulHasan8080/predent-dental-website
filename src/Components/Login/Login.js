import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {

    const { userLogin, handleEmail, handlePassword, googleLogin, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home"


    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                history.push(redirect_url)
            })
            .finally(() => {
            })
    }

    return (
        <div>
            <h3 className="text-center my-3">Please Login</h3>
            <form onSubmit={userLogin}>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input onBlur={handleEmail} placeholder="Enter your E-mail" type="email" className="form-control w-50 mx-auto" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <input onBlur={handlePassword} placeholder="Enter your Password" type="password" className="form-control w-50 mx-auto" id="inputPassword3" required />
                    </div>
                </div>
                <div>
                    <p className="m-2 text-danger">{error}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">Sign in</button>
            </form>

            <div className=" my-3">
                <button onClick={handleGoogleLogin} className="btn-google btn btn-danger">Google Login</button>
            </div>

            <div className="text-center my-3 ">
                <h5>New user ?</h5>
                <Link to="/register">Please Register</Link>
            </div>
        </div>
    );
};

export default Login;