import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-stone-200">
            <div className='container mx-auto'>
                <div className='flex justify-between items-center py-4'>

                    <div>
                        <h1 className='text-3xl text-black font-extrabold'>JobPost</h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/all-jobs">All Jobs</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;