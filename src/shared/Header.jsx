import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='flex justify-between items-center'>

                <div>
                    <h1 className='text-3xl text-blue-500'>JobPost</h1>
                </div>
                <div>
                    <ul className='flex items-center gap-6'>
                        <li><Link to="/Home"></Link>Home</li>
                        <li><Link to="/all-jobs"></Link>All Jobs</li>
                        <li><Link to="/Login"></Link>Login</li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;