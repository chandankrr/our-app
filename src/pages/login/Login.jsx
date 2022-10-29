import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <h1>OurApp</h1>
      <div className="card">
        <h2>Sign in</h2>
        <p>Hi, Welcome to OurApp</p>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
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
