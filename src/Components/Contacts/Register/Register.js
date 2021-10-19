
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {

    const { handleEmail, handlePassword, userRegister, error } = useAuth()
    return (
        <div>
            <div>
                <h3 className="text-center my-3">Please Register</h3>
                <form onSubmit={userRegister}>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input onBlur={handleEmail} placeholder="E-mail" type="email" className="form-control w-50 mx-auto" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input onBlur={handlePassword} placeholder="Password" type="password" className="form-control w-50 mx-auto" id="inputPassword3" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-submit">Register</button>
                </form>

                <div className="my-3">
                    <p className="text-danger">{error}</p>
                </div>

                <div className="text-center my-3 ">
                    <h5>Already Account ?</h5>
                    <Link to="/login">Please Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;