import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-xl mx-auto">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="password" placeholder="Password" />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Already have a member?{' '}
                        <Link to={'/login'} className="underline text-black">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
