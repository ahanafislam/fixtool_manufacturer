import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <header className='bg-primary sticky top-0 z-50'>
            <div className="navbar text-white container mx-auto lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li><Link className='hover:text-secondary' to="/">Home</Link></li>
                            <li><Link className='hover:text-secondary' to="/">Blog</Link></li>
                            {
                                user
                                &&
                                <li><Link className='hover:text-secondary' to="/dashboard">Dashboard</Link></li>
                            }
                            <li><Link className='hover:text-secondary' to="/about">About</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">Fix<span className='text-secondary'>Tool</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='hover:text-secondary' to="/">Home</Link></li>
                        <li><Link className='hover:text-secondary' to="/">Blog</Link></li>
                        {
                            user
                            &&
                            <li><Link className='hover:text-secondary' to="/dashboard">Dashboard</Link></li>
                        }
                        <li><Link className='hover:text-secondary' to="/about">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user 
                        ?
                        <div className='flex items-center'>
                             <p className='font-bold mr-2'>{user?.displayName}</p>
                            <button onClick={logout} className="btn btn-xs btn-secondary text-primary">
                                <FaSignOutAlt className='mr-1'/> Logout
                            </button>
                        </div>
                        :
                        <Link to='/login' className="btn btn-sm btn-secondary text-primary">
                            <FaSignInAlt className='mr-1'/> Login
                        </Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;