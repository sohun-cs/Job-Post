import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className="bg-stone-200">
            <div className='container mx-auto'>
                <div className='flex justify-between items-center py-3'>
                    <div>
                        <h1 className='text-3xl text-black font-extrabold'><Link to='/'>JobPost</Link></h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/all-jobs">All Jobs</Link></li>
                            {!user && (
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                            )}

                            {user && (
                                <div className='dropdown dropdown-end z-50'>
                                    <div
                                        tabIndex={0}
                                        role='button'
                                        className='btn btn-ghost btn-circle avatar'
                                    >
                                        <div title={user?.displayName} className='w-10 rounded-full'>
                                            <img
                                                referrerPolicy='no-referrer'
                                                alt='User Profile Photo'
                                                src={user?.photoURL}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                    >
                                        <li>
                                            <Link to='/add-jobs' className='justify-between'>
                                                Add Job
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                                        </li>
                                        <li>
                                            <Link to='/my-bids'>My Bids</Link>
                                        </li>
                                        <li>
                                            <Link to='/bid-requests'>Bid Requests</Link>
                                        </li>
                                        <li className='mt-2'>
                                            <button
                                                onClick={logOut}
                                                className='bg-gray-200 block text-center'
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;