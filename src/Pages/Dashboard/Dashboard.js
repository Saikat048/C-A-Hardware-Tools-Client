import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mx-auto mt-5 ">
                <h2 className='text-4xl text-primary'>Dashboard</h2>
                <Outlet />
                

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><CustomLink to="/dashboard">My Orders</CustomLink></li>
                    <li><CustomLink to="/dashboard/addareview">Add A Review</CustomLink></li>
                    <li><CustomLink to="/dashboard/myprofile">My Profile</CustomLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;