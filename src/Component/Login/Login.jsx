
import { Link } from "react-router-dom";
import Navber from "../Shared/Navber";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {signIn}=useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email =from.get('email')
        const password =from.get('password')
      signIn(email ,password)
      .then(result=>{
        console.log(result.user);
      })
      .catch(err =>{
        console.log(err);
      })

    }
    return (
        <div>
            <Navber />
            <div>
                <h3 className="text-2xl my-10 text-center uppercase">please Login</h3>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-[#fff] bg-[#003165]">Login</button>
                    </div>
                </form>
                <p className="text-center mt-5"> Do not have a account <Link className="text-[#ACC8E5] font-bold" to="/register"> register</Link></p>
            </div>
        </div>
    );
};

export default Login;