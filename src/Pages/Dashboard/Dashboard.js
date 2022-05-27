import React from 'react';
import { MdApps } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile relative bg-primary bg-opacity-10">
            <input id="appDrawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-5 px-3">
                {/* App Drawer Button */}
                <label htmlFor="appDrawer" className="lg:hidden absolute left-0 top-0 h-16 w-16">
                    <MdApps className='text-primary text-5xl'/>
                </label>
                {/* Page Content */}
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="appDrawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;