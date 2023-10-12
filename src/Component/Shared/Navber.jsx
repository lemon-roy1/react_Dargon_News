import { Link, NavLink } from "react-router-dom";
import porflio from "../../assets/user.png"

const Navber = () => {
    const NavLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/Career'>Career</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="flex gap-3">
                <img className="w-11 h-12" src={porflio} alt="" />
                    <button className="btn">login</button>
                </Link>

            </div>
        </div>
    );
};

export default Navber;