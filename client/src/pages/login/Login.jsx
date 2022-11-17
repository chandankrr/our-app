import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './login.scss';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <h1>OurApp</h1>
      <div className="card">
        <h2>Sign in</h2>
        <p>Hi, Welcome to OurApp</p>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Sign in</button>
        </form>
        <div className="sign-in">
          <span>or</span>
          <button>Sign in with Google</button>
        </div>
        <div className="sign-up">
          <span>New to OurApp?</span>
          <Link to="/register">
            <button>Create account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
