import axios from 'axios';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios.post('/auth/register', user);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <h1>OurApp</h1>
      <div className="card">
        <h2>Sign up</h2>
        <p>Keep in touch with your loved ones</p>
        <form onSubmit={handleClick}>
          <input type="text" placeholder="Username" required ref={username} />
          <input type="email" placeholder="Email" required ref={email} />
          <input
            type="password"
            placeholder="Password"
            required
            minLength="6"
            ref={password}
          />
          <button type="submit">Sign up</button>
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
