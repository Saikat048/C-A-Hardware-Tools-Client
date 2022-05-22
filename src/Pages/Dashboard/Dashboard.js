import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col justify-center">
                <h2 className='text-4xl text-primary'>Dashboard</h2>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><CustomLink to="/dashboard">My Orders</CustomLink></li>
                    <li><CustomLink to="/dashboard/addareview">Add A Review</CustomLink></li>
                    <li><CustomLink to="/dashboard/myprofile">My Profile</CustomLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;