import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <h1>OurApp</h1>
      <div className="card">
        <h2>Sign up</h2>
        <p>Keep in touch with your loved ones</p>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign up</button>
        </form>
        <div className="sign-in">
          <span>or</span>
          <button>Sign in with Google</button>
        </div>
        <div className="sign-up">
          <span>Already on OurApp?</span>
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
