import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='bg-primary'>
            <div className="navbar text-white container mx-auto lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li><Link className='hover:text-secondary' to="/">Home</Link></li>
                            <li><Link className='hover:text-secondary' to="/">Blog</Link></li>
                            <li><Link className='hover:text-secondary' to="/about">About</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">Fix<span className='text-secondary'>Tool</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='hover:text-secondary' to="/">Home</Link></li>
                        <li><Link className='hover:text-secondary' to="/">Blog</Link></li>
                        <li><Link className='hover:text-secondary' to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        to='/login'
                        className="btn btn-sm btn-secondary text-primary"
                    ><FaSignInAlt className='mr-1'/> Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;