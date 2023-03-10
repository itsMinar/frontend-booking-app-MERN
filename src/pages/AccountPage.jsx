import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AccountPage = () => {
    const [redirect, setRedirect] = useState(null);
    const { user, setUser, ready } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    // logout function
    const handleLogout = async () => {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    };

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }

    const linkClasses = (type = null) => {
        let classes = 'py-2 px-6';

        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }

        return classes;
    };

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'}>
                    My Profile
                </Link>
                <Link
                    className={linkClasses('bookings')}
                    to={'/account/bookings'}
                >
                    My Bookings
                </Link>
                <Link className={linkClasses('places')} to={'/account/places'}>
                    My Accommodations
                </Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})
                    <button
                        onClick={handleLogout}
                        className="primary max-w-sm mt-2"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccountPage;
