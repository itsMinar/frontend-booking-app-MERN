import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert('Login Successful.');
            setRedirect(true);
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-xl mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?{' '}
                        <Link to={'/register'} className="underline text-black">
                            Register now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
